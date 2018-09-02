//STILL TO DO:
//// hook up poets name to wikipedia page with promise
//// get url object from that page
//// display the 3 poets, and the urls, on the html page
//// format it
//// find the length of the poetrydb object/array so I'm not using 128 as max number
//// sometimes get response.statusCode is 'undefined' from poetrydb. Put if statement in so if statusCode = undefined then show message on webpage saying try again
//tidt up the 3 poets into a class poet that has properties
//// make the 3 poets disappear when the button is pressed again - redefine the vars?
//wikipedia:
//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Walt%20Whitman&utf8=&format=json
//parsedResponse.query.search[0].title

const request = require('request')

document.addEventListener("DOMContentLoaded", () => {

    function getPoets() {
        ((min, max) => {
            randomNumberOne = (Math.floor(Math.random() * (max - min)) + min);
            randomNumberTwo = (Math.floor(Math.random() * (max - min)) + min);
            randomNumberThree = (Math.floor(Math.random() * (max - min)) + min);
        })(0, 128)
        request(`http://poetrydb.org/author`, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            let parsedResponse = JSON.parse(body);

            let firstPoet = parsedResponse.authors[randomNumberOne]; /*"Walt Martin Whitman"*/
            let firstPoetSplit = firstPoet.split(" ");
            if (firstPoetSplit.length === 1) { //or whatever
                var poet1 = `${firstPoetSplit[0]}`
            } else if (firstPoetSplit.length === 2) {
                var poet1 = `${firstPoetSplit[0]} ${firstPoetSplit[1]}`
            } else if (firstPoetSplit.length === 3) {
                var poet1 = `${firstPoetSplit[0]} ${firstPoetSplit[1]} ${firstPoetSplit[2]}`             
            } else if (firstPoetSplit.length === 4) {
                var poet1 = `${firstPoetSplit[0]} ${firstPoetSplit[1]} ${firstPoetSplit[2]} ${firstPoetSplit[3]}`
            } else {
               var poet1 = "This poet has not got a name"
            }

            let secondPoet = parsedResponse.authors[randomNumberTwo]; /*Roger McGough*/
            let secondPoetSplit = secondPoet.split(" ");
            if (secondPoetSplit.length === 1) { //or whatever
                var poet2 = `${secondPoetSplit[0]}`
            } else if (secondPoetSplit.length === 2) {
                var poet2 = `${secondPoetSplit[0]} ${secondPoetSplit[1]}`
            } else if (secondPoetSplit.length === 3) {
                var poet2 = `${secondPoetSplit[0]} ${secondPoetSplit[1]} ${secondPoetSplit[2]}`         
            } else if (secondPoetSplit.length === 4) {
                var poet3 = `${secondPoetSplit[0]} ${secondPoetSplit[1]} ${secondPoetSplit[2]} ${secondPoetSplit[3]}`              
            } else {
                var poet2 = "This poet has not got a name"
            }

            let thirdPoet = parsedResponse.authors[randomNumberThree]; /*Peter Kan Dufot"*/
            let thirdPoetSplit = thirdPoet.split(" ");
            if (thirdPoetSplit.length === 1) { //or whatever
                var poet3 = thirdPoetSplit[0]
            } else if (thirdPoetSplit.length === 2) {
                var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]}`
            } else if (thirdPoetSplit.length === 3) {
                var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]} ${thirdPoetSplit[2]}`             
            } else if (thirdPoetSplit.length === 4) {
                var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]} ${thirdPoetSplit[2]} ${thirdPoetSplit[3]}`                 
            } else {
                var poet3 = "This poet has not got a name"
            }
            console.log(`First Poet: ${poet1} \nSecond Poet: ${poet2} \nThird Poet: ${poet3}`);

            displayPoets(poet1, poet2, poet3, d)

        })
    }

    getPoets()





    var showPoets = document.getElementById('poet button');
    showPoets.addEventListener('click', function (event) {
        // let firstPoetSplit = "Walt Whitman"
        // let secondPoetSplit = "Roger McGough"
        // let thirdPoetSplit = "Allen Ginsberg"
        // let d = "fine"

        function displayPoets(a, b, c, d) {

            if (d === "undefined") {
                var pError = document.createElement("p");
                var element = document.getElementById("getPoets");
                var useError = document.createTextNode("Oops, there's been a problem. Please press again.");
                pError.appendChild(useError);
                element.appendChild(pError);
            } else {
                var pOne = document.createElement("p");
                var pTwo = document.createElement("p");
                var pThree = document.createElement("p");
                var element = document.getElementById("getPoets");
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
        }
        displayPoets(firstPoetSplit, secondPoetSplit, thirdPoetSplit, d)
    })






}, false);



let promisePostcode = new Promise((resolve, reject) => {
    request(`https://api.postcodes.io/postcodes/${postcodeInput}`, function (error, response, body) {
        //console.log('error:', error);
        //console.log('statusCode:', response && response.statusCode);
        let parsedReturn = JSON.parse(body);
        long = parsedReturn.result.longitude;
        lat = parsedReturn.result.latitude;
        if (resolve) {
            resolve(console.log(`Longitude: ${parsedReturn.result.longitude}\nLatitude: ${parsedReturn.result.latitude}`))
        } else {
            reject(console.log("nothing"))
        }
    });
})
promisePostcode
    .then(
        function (result) {
            //gets lat and log and requests sunrise and sunset from an API
            request(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`, function (error, response, body) {
                //console.log('error:', error);
                //console.log('statusCode:', response && response.statusCode);
                let parsedReturn = JSON.parse(body)
                //console.log(parsedReturn)
                console.log(`Sunrise: ${parsedReturn.results.sunrise}`)
                console.log(`Sunset: ${parsedReturn.results.sunset}`)
            });
            //gets lat and log and requests weather from an API
            request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=29fbf13534ce1c365d6ba2d7c71b8030`, function (error, response, body) {
                //console.log('error:', error);
                //console.log('statusCode:', response && response.statusCode);
                let parsedReturn = JSON.parse(body)
                //console.log(parsedReturn);
                console.log(`The weather is: ${parsedReturn.weather[0].description} \nThe temperature here is: ${Math.trunc((parsedReturn.main.temp - 273))} Celcius`)

            })
        },
        error => console.log("error")
    )
    .catch()