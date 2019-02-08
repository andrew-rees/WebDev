document.addEventListener("DOMContentLoaded", () => {

    function getAndDisplayLatestStory() {
        let apiKey = "caea3217-7fe3-465b-87c2-25d51493099c"
        let story = "football"
        fetch(`https://content.guardianapis.com/search?q=${story}&order-by=newest&api-key=${apiKey}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (parsedResponse) {
                var webUrl = parsedResponse.response.results[0].webUrl;
                var webTitle = parsedResponse.response.results[0].webTitle;
                var webPub = parsedResponse.response.results[0].webPublicationDate;
                var formattedDate = moment(webPub).format("DD MMM YYYY, HH:MM:SS");
                formatLatestStory(webUrl, webTitle, formattedDate)
            });
    };

    function formatLatestStory(webUrl, webTitle, formattedDate) {
        var spiel = $("<p>").text("The latest football articles from the Guardian here:").attr("id", "bold")
        var title = $("<a>").text(webTitle).attr('href', webUrl).attr("target", "_blank")
        var publishedOn = $("<p>").text(formattedDate);
        $(".apiReturn").append(spiel, title, publishedOn);
    };
    getAndDisplayLatestStory()
    
}, false);



















//var json = '{"result":true, "count":42}';
var footy = '{    "response": {    "status": "ok",    "userTier": "developer",    "total": 201319,    "startIndex": 1,    "pageSize": 10,    "currentPage": 1,"pages": 20132,"orderBy": "relevance","results": [{"id": "football/quiz/2010/feb/25/liverpool","type": "article","sectionId": "football","sectionName": "Football","webPublicationDate": "2018-04-24T10:52:46Z","webTitle": "Football quiz: Liverpool in Europe","webUrl": "https://www.theguardian.com/football/quiz/2010/feb/25/liverpool","apiUrl": "https://content.guardianapis.com/football/quiz/2010/feb/25/liverpool","isHosted": false,"pillarId": "pillar/sport","pillarName": "Sport"}]}}';






//obj = JSON.parse(footy);
//console.log(obj.response.status)
///console.log(obj.response.results)

//console.log(obj.count);
// expected output: 42

//console.log(obj.result);
// expected output: true