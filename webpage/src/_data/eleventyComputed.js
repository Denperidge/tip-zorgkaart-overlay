import { ratingColourById, totalRatingById } from "./utils.js";

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
    totalRatingById: (data) => {
        return totalRatingById(data.fictionalTestData);
    },
    ratingColourById: (data) => {
        return ratingColourById(data.fictionalTestData);
    }
}