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
        const out = {};
        data.fictionalTestData.forEach((entry) => {
            const { about, rating } = entry; 
            if (!Object.keys(out).includes(about)) {
                out[about] = 0;
            }
            out[about] += rating;
        })
        return out;
    }
}