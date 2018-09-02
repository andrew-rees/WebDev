// look at theguardian API
//// access key is: caea3217-7fe3-465b-87c2-25d51493099c
//// address is: https://content.guardianapis.com/search?api-key=caea3217-7fe3-465b-87c2-25d51493099c
//get the newest football story and display
////search for the Tag football eg https://content.guardianapis.com/search?q=football&api-key=caea3217-7fe3-465b-87c2-25d51493099c
////order by webPublicationDate

const request = require("request");
const moment = require("moment");

console.log("the file ran!")

function getLatestStory () {
    console.log("getlatestStory ran!")
    let apiKey = "caea3217-7fe3-465b-87c2-25d51493099c"
    let story = "football"
    request(`https://content.guardianapis.com/search?q=${story}&order-by=newest&api-key=${apiKey}`, function (error, response, body) {
    //console.log('error:', error);
    //console.log('statusCode:', response && response.statusCode);
    let parsedResponse = JSON.parse(body);
    var webUrl = parsedResponse.response.results[0].webUrl
    var webTitle = parsedResponse.response.results[0].webTitle
    var webPub = parsedResponse.response.results[0].webPublicationDate
    var webPubFormatted = moment(webPub, "YYYY-MM-DD HH:MM:SS").format("DD MMM YYYY, HH:MM:SS")
    console.log(`parsedResponse: ${webPub}`);
    console.log(moment());
    displayLatestStory(webUrl, webTitle, webPubFormatted)
    })
}


function displayLatestStory(a, b, c) {
    console.log("displayLatesStoory ran!")
    console.log(`This is the url: ${a}`)
    console.log(`This is the headline: ${b}`)
    console.log(`And it was published: ${c}`)
    var pOne = document.createElement("p");
    var pTwo = document.createElement("p");
    var pThree = document.createElement("p");
    var element = document.getElementById("guardianFootball");
    var useLineOne = document.createTextNode(a);
    var useLineTwo = document.createTextNode(b);
    var useLineThree = document.createTextNode(c);

    pOne.appendChild(useLineOne);
    pTwo.appendChild(useLineTwo);
    pThree.appendChild(useLineThree);
    element.appendChild(pOne);
    element.appendChild(pTwo);
    element.appendChild(pThree);
    
}

document.addEventListener("DOMContentLoaded", () => {
    getLatestStory()
    console.log("The DOM content loaded")
}, false);

// let now = moment() //this gives you the time now
// let birthday = "17/10/1983"

// let formattedDate = moment(birthday, "DD/MM/YYYY").format("DD MMM YYYY") //moment() maps birthday on DD/MM/YY, then formats it how you like in ()
// let formattedNow = moment(now, "YYYY-MM-DD HH:MM:SS:MSMSMS").format("DD MMM YYYY, HH:MM:SS") //same here - maps moment() into format()

// console.log(formattedDate)
// console.log(formattedNow)



















//var json = '{"result":true, "count":42}';
var footy = '{    "response": {    "status": "ok",    "userTier": "developer",    "total": 201319,    "startIndex": 1,    "pageSize": 10,    "currentPage": 1,"pages": 20132,"orderBy": "relevance","results": [{"id": "football/quiz/2010/feb/25/liverpool","type": "article","sectionId": "football","sectionName": "Football","webPublicationDate": "2018-04-24T10:52:46Z","webTitle": "Football quiz: Liverpool in Europe","webUrl": "https://www.theguardian.com/football/quiz/2010/feb/25/liverpool","apiUrl": "https://content.guardianapis.com/football/quiz/2010/feb/25/liverpool","isHosted": false,"pillarId": "pillar/sport","pillarName": "Sport"}]}}';






//obj = JSON.parse(footy);
//console.log(obj.response.status)
///console.log(obj.response.results)

//console.log(obj.count);
// expected output: 42

//console.log(obj.result);
// expected output: true