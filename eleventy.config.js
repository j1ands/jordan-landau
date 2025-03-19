module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/bundle.css");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

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