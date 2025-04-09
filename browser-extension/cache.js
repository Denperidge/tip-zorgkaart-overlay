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

init();