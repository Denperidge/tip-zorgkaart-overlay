function totalRatingById(ratings) {
     const out = {};
    ratings.forEach((entry) => {
        const { about, rating } = entry; 
        if (!Object.keys(out).includes(about)) {
            out[about] = 0;
        }
        out[about] += rating;
    })
    return out;
}
function ratingColourById(ratingsArray) {
    const ratings = totalRatingById(ratingsArray);
    const out = {};
    const {min, max} = minMaxRating(ratings)
    Object.keys(ratings).forEach(about => {
        const rating = ratings[about];
        if (rating == 0) {
        out[about] = null;
            return;
        }

        const minOrMax = rating < 0 ? min : max;            
        const hue = rating < 0 ? 0 : 80;
        const saturation = 100;
        const lightness = 100 - rating / minOrMax * 60;
        out[about] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
    return out;
}

function minMaxRating(ratings) { 
    const ratingValues = Object.values(ratings);
    return {
        max: Math.max(...ratingValues),
        min: Math.min(...ratingValues)
    }
}
