function init() {
    if (getComputedStyle(document.querySelector("title")).backgroundPositionX != "37%") {
        const link = document.createElement("link");
        link.setAttribute("href", "https://tipzo.neonpastel.net/extension.css")
        link.setAttribute("rel", "stylesheet");
        document.head.appendChild(link);
    }
}
init();
