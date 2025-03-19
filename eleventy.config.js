module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/bundle.css");

    eleventyConfig.setServerOptions({
        watch: ["./_site/bundle.css"]
    })

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};