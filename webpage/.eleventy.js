import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import eleventySass from "@grimlink/eleventy-plugin-sass";
import * as sass from "sass";
import ratings from "./src/_data/fictionalTestData.json" with { type: "json" };

const PICO_VERSION = "node_modules/@picocss/pico/css/pico.fuchsia.css";


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

    eleventyConfig.addGlobalData("picoVersion", PICO_VERSION)
    eleventyConfig.addPassthroughCopy(PICO_VERSION)
    eleventyConfig.addPlugin(eleventySass, {
        sass: sass,
        outputPath: "",
        outputStyle: "compressed"
    });

    eleventyConfig.addPassthroughCopy("src/static/")
}