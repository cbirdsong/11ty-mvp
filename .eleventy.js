module.exports = function (eleventyConfig) {
  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html
    templateFormats: ["md", "njk", "html"],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // These are all optional (defaults are shown):
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
