function loadCssIfNeeded() {
    if (getComputedStyle(document.querySelector("title")).backgroundPositionX != "37%") {
        const link = document.createElement("link");
        link.setAttribute("href", "https://tipzo.neonpastel.net/extension.css")
        link.setAttribute("rel", "stylesheet");
        document.head.appendChild(link);
    }
}

async function summaryFromCache(callback) {
    let summary = sessionStorage.getItem("summary");
    if (summary) {
        callback(JSON.parse(summary));
    } else {        
        fetch("https://tipzo.neonpastel.net/summary.json")
            .then(async (res) => {
                const ratings = await res.json();
                sessionStorage.setItem("summary", JSON.stringify(ratings));
                callback(ratings)    
            })
            .catch((err) => {
                if (err) { console.error(err); }
            })
    }
}

loadCssIfNeeded();
