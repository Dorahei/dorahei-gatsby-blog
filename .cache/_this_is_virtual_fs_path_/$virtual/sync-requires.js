
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("D:\\Study_prog\\gatsby\\dorahei-gatsby-blog\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("D:\\Study_prog\\gatsby\\dorahei-gatsby-blog\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\Study_prog\\gatsby\\dorahei-gatsby-blog\\src\\pages\\index.js")),
  "component---src-templates-blog-template-js": preferDefault(require("D:\\Study_prog\\gatsby\\dorahei-gatsby-blog\\src\\templates\\blog-template.js")),
  "component---src-templates-blogpost-template-js": preferDefault(require("D:\\Study_prog\\gatsby\\dorahei-gatsby-blog\\src\\templates\\blogpost-template.js")),
  "component---src-templates-cat-template-js": preferDefault(require("D:\\Study_prog\\gatsby\\dorahei-gatsby-blog\\src\\templates\\cat-template.js"))
}

