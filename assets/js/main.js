// API-code:966865887cbf40099e1320b60c682e88
const output = document.querySelector('section')
const inText = document.getElementById("inText")
function searchNow() {

    fetch(`http://newsapi.org/v2/everything?q=${inText.value}&apiKey=966865887cbf40099e1320b60c682e88`)
        .then(response => response.json())
        .then(news => {
            for (let i = 0; i < news.articles.length; i++) {
                output.innerHTML += "<div><img style='width:450px;'src=" + news.articles[i].urlToImage + "><h5>" + news.articles[i].title + "</h5><p style='width:500px;'> " + news.articles[i].source.name + "<br> " + news.articles[i].description + "<br>" + news.articles[i].publishedAt + "</p><br><a href=" + news.articles[i].url + " style='text-decoration: none;background-color:grey;color:#fff;font-size:.7em;padding:5px 15px;' target='_blank'>READ MORE</a> </div>"
                console.log("hi")
            }
            console.log(news)
        })
}