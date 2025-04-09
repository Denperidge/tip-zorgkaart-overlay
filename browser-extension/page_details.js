

async function init() {
    const path = (new URL(window.document.URL).pathname)
    const about = path.substring(path.lastIndexOf("/") + 1);
    const parent = document.querySelector(".article-body");
    const listElem = document.createElement("ul")

    fetch("https://tipzo.neonpastel.net/ratings/" + about + ".json")
        .then(res => {
            res.json().then(data => {
                document.querySelector(".sidebar").setAttribute("style", "background-color: " + data.colour)
                const ratings = data.ratings;
                for (let i = 0; i < ratings.length; i++) {
                    const elem = document.createElement("li");
                    const {rating, comment} = ratings[i];
                    const prefix = rating < 0 ? "-" : rating == 0 ? "~" : "+";;
                    elem.innerText = `[${prefix}] ${comment}`;
                    listElem.appendChild(elem);
                }
                const title = document.createElement("h2")
                title.innerText = "Ratings";
                
                const ratingBadge = document.createElement("p");
                ratingBadge.classList.add("rating-badge")
                ratingBadge.innerText = "Rating: " + data.summary;
                ratingBadge.style.backgroundColor = data.colour
                
                parent.appendChild(title)
                parent.appendChild(ratingBadge);
                parent.appendChild(listElem)
            })
        })
        .catch(err => console.error)
}

init();
