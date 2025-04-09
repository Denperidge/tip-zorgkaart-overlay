async function init() {
    fetch("https://tipzo.neonpastel.net/summary.json")
        .then(async (res) => {
            const ratings = await res.json();
            const ids = Object.keys(ratings)
            ids.forEach((id) => {
                const target = document.querySelector(`.teaser:has(a[href$="/${id}"]) .teaser-author`);
                if (target) {
                    console.log("target");
                    const p =document.createElement("span");
                    p.classList.add("rating-badge")
                    p.ariaLabel = "TIP Zorgkaart Overlay rating"
                    p.innerText = `Rating: ${ratings[id]}`
                    target.after(p)
                }
            })
        })
        .catch((err) => {
            if (err) { console.error(err); }
        })
}

init();