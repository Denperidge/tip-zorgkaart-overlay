

async function init() {
    const path = (new URL(window.document.URL).pathname)
    const about = path.substring(path.lastIndexOf("/") + 1);
    const parent = document.querySelector(".article-body");
    const listElem = document.createElement("ul")

    fetch("https://tipzo.neonpastel.net/ratings/" + about + ".json")
        .then(res => {
            res.json().then(ratings => {
                for (let i = 0; i < ratings.length; i++) {
                    const elem = document.createElement("li");
                    elem.innerText = ratings[i].rating;
                    listElem.appendChild(elem);
                }
                parent.appendChild(listElem)
            })
        })
        .catch(err => console.error)
}

init();


//