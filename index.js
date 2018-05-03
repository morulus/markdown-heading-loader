"use strict";

var loaderUtils = require(`loader-utils`);
var unified = require(`unified`);
var parse = require(`remark-parse`);

module.exports = function getHeadingPlugin(source) {
  var heading = '';

  this.cacheable && this.cacheable(true);
  var options = loaderUtils.getOptions(this) || {};

  /* Get markdown AST (powered by unified and remark-parse) */
  var parser = unified().use(parse, Object.assign({
    commonmark: !!options.commonmark
  }, options));

  var ast = parser.parse(source);

  var headingKey = ast.children && ast.children.findIndex(function (item) {
    return item.type === `heading` && item.depth === 1;
  });

  if (headingKey >= 0) {
    heading = ast.children[headingKey].children[0] &&
      ast.children[headingKey].children[0].value;
  } else {
    heading = options.default || '';
  }

  return `module.exports = ${JSON.stringify(heading)};`
};
