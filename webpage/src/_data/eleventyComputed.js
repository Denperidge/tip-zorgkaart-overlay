import * as meow from "../../../browser-extension/util.js";
console.log("---")
console.log(meow)

export default {
    allAbout: (data) => {
        return Array.from(
            new Set(
                data.fictionalTestData.map(entry => entry.about)
            )
        );
    },
    ratingsById: (data) => {
        const out = {};
        data.fictionalTestData.forEach((entry) => {
            const { about, rating, comment } = entry; 
            if (!Object.keys(out).includes(about)) {
                out[about] = [];
            }
            out[about].push({rating, comment})
        })
        return out;
    },
    totalRatingById: totalRatingById,
    ratingColourById
}