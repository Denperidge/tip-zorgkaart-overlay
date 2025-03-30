import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import eleventySass from "@grimlink/eleventy-plugin-sass";
import sass from "sass";
import ratings from "./src/_data/fictionalTestData.json" with { type: "json" };

const ratingsByAbout = {};
ratings.forEach(({about, rating, comment}) => {
    if (!Object.keys(ratingsByAbout).includes(about)) {
        ratingsByAbout[about] = [];
    }
    ratingsByAbout[about].push({rating, comment});
})

export const config = {
    dir: {
        input: "src",
        output: "dist"
    }
};


export default function (eleventyConfig) {
    eleventyConfig.addGlobalData("ratingsByAbout", ratingsByAbout)
    eleventyConfig.addPlugin(eleventyAutoCacheBuster);

    eleventyConfig.addPlugin(eleventySass, {
        sass: sass,
        outputPath: "",
        outputStyle: "compressed"
    });

    eleventyConfig.addPassthroughCopy("src/static/")
}