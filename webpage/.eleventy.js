import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import eleventySass from "@grimlink/eleventy-plugin-sass";
import sass from "sass";

export const config = {
    dir: {
        input: "src",
        output: "dist"
    }
};


export default function (eleventyConfig) {
    eleventyConfig.addGlobalData("meow", "red")
    eleventyConfig.addPlugin(eleventyAutoCacheBuster);

    eleventyConfig.addPlugin(eleventySass, {
        sass: sass,
        outputPath: "",
        outputStyle: "compressed"
    });

    eleventyConfig.addPassthroughCopy("src/static/")
}