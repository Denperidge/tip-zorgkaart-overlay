let summary;

function showInfoWindowRating() {
    const selectedProvider = document.querySelector(".info-window-map a");
    if (selectedProvider && !document.querySelector(".info-window-map .rating-badge")) {
        const href = selectedProvider.getAttribute("href");
        const id = href.substring(href.lastIndexOf("/") + 1);
        
        const p = document.createElement("span");
        p.classList.add("rating-badge")
        p.ariaLabel = "TIP Zorgkaart Overlay rating"
        p.innerText = `Rating: ${summary[id]}`
        document.querySelector(".info-window-map__txt").after(p)
    }
}

function init() {
    summaryFromCache(data => {summary = data;});

    const observer = new MutationObserver((mutations, observer) => {
        mutations.forEach(mutation => {
            if(mutation.target.getAttribute("class") === "gm-style-iw-a") {
                showInfoWindowRating()
            }
        });

    });
    observer.observe(document.querySelector(".map-list"), {subtree: true, childList: true})
}
init();