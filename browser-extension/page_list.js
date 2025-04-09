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

summaryFromCache(addRatingBadges);