function addRatingBadges(summaryRatings) {
    const ids = Object.keys(summaryRatings)
    ids.forEach((id) => {
        const target = document.querySelector(`.teaser:has(a[href$="/${id}"]) .teaser-author`);
        if (target) {
            const p =document.createElement("span");
            p.classList.add("rating-badge")
            p.ariaLabel = "TIP Zorgkaart Overlay rating"
            p.innerText = `Rating: ${summaryRatings[id]}`
            target.after(p)
        }
    })
}


async function init() {
    let summary = sessionStorage.getItem("summary")
    if (summary) {
        console.log("Summary from storage...");
        addRatingBadges(JSON.parse(summary));
    } else {        
        console.log("Summary from tipzo...")
        fetch("https://tipzo.neonpastel.net/summary.json")
            .then(async (res) => {
                const ratings = await res.json();
                sessionStorage.setItem("summary", JSON.stringify(ratings));
                addRatingBadges(ratings)    
            })
            .catch((err) => {
                if (err) { console.error(err); }
            })
            
    }

}

init();