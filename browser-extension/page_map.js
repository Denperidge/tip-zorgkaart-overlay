let timeout = undefined;

function showInfoWindowRating() {
    const selectedLocation = document.querySelector(".info-window-map");
    if (selectedLocation) {
        alert("meow")
        
    }
}

function init() {
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