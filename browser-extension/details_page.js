

//fetch("http://localhost:8080/ratings/")
async function init() {
    const path = (new URL(window.document.URL).pathname)
    const about = path.substring(path.lastIndexOf("/") + 1);
    fetch("http://localhost:8080/ratings/" + about + ".json")
        .then(res => {
            res.text().then(data => {
                console.log(data);
            })
        })
        .catch(err => console.error)
}

init();


//document.querySelector(".article-body").appendChild