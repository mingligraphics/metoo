const frontMatter = require('front-matter');
const handlebars = require('handlebars');
const handlebarsWax = require('handlebars-wax');
const handlebarsLayouts = require('handlebars-layouts');
const handlebarsHelpersPackage = require('handlebars-helpers');
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const handlebarsHelpers = handlebarsHelpersPackage();
const { loadUserConfig, parseSimpleLayout } = require('./utils');
const glob = require('globby');

const userConfig = loadUserConfig();
const config = Object.assign({}, {
  data: 'src/markup/data',
  decorators: 'src/markup/decorators',
  helpers: 'src/markup/helpers',
  layouts: 'src/markup/layouts',
  partials: 'src/markup/partials',
}, userConfig);

class HbsAsset extends HTMLAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.wax = handlebarsWax(handlebars)
      .helpers(handlebarsLayouts)
      .helpers(handlebarsHelpers)
      .helpers(`${config.helpers}/**/*.js`)
      .data(`${config.data}/**/*.{json,js}`)
      .decorators(`${config.decorators}/**/*.js`)
      .partials(`${config.layouts}/**/*.{hbs,handlebars,js}`)
      .partials(`${config.partials}/**/*.{hbs,handlebars,js}`);
  }

  processSingleDependency(path, opts) {
    if (path) {
      return super.processSingleDependency(path, opts);
    }
  }

  parse(code) {
    // process any frontmatter yaml in the template file
    const frontmatter = frontMatter(code);

    // process simple layout mapping that does not use handlebars-layouts. i.e {{!< base}}
    const { dependencies, content } = parseSimpleLayout(frontmatter.body, config);

    dependencies.forEach(path => this.addDependency(path, {
      includedInParent: true,
    }));

    const helpersDep = glob.sync([
      `${config.helpers}/**/*.js`,
      `${config.data}/**/*.{json,js}`,
      `${config.decorators}/**/*.js`,
      `${config.layouts}/**/*.{hbs,handlebars,js}`,
      `${config.partials}/**/*.{hbs,handlebars,js}`,
    ]);

    helpersDep.forEach(path => this.addDependency(path, {
      includedInParent: true,
    }));

    // combine frontmatter data with NODE_ENV variable for use in the template
    const data = Object.assign({}, frontmatter.attributes, { NODE_ENV: process.env.NODE_ENV });

    // compile template into html markup and assign it to this.contents. super.generate() will use this variable.
    this.contents = this.wax.compile(content)(data);

    // Return the compiled HTML
    return super.parse(this.contents);
  }
}

module.exports = HbsAsset;
