//STILL TO DO:
//// format it
//// sometimes get response.statusCode is 'undefined' from poetrydb. Put if statement in so if statusCode = undefined then show message on webpage saying try again
//tidt up the 3 poets into a class poet that has properties
//// make the 3 poets disappear when the button is pressed again - redefine the vars?


//const fetch = require('node-fetch')


document.addEventListener("DOMContentLoaded", () => {

    //first api call

    fetch(`http://poetrydb.org/author/Whitman`) //should this be running after dom content loaded?
    .then(function(response){
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok ffs.');
        }
    })
    .then(function(parsedReponseVerse) {
        ((min, max) => {
            randomNumberOne = (Math.floor(Math.random() * (max - min)) + min);
        })(0, 10)
        let verseOne = parsedReponseVerse[randomNumberOne].lines;
        let verseOneTrimmed = verseOne.slice(0, 3)
        console.log(`${verseOneTrimmed}`)
        var classicElementType = document.createElement("p"); //this says what type of element you want to create
        var fancyElementType = document.createElement("p");
        var minimalElementType = document.createElement("p");
        var elementPlacerClassic = document.getElementById("classic");
        var elementPlacerFancy = document.getElementById("fancy");
        var elementPlacerMinimal = document.getElementById("minimal") //this says where you want to put the new text - in this case with 'getPoets'
        var verseClassic = document.createTextNode(verseOneTrimmed); //this says that you want to create a 
        var verseFancy = document.createTextNode(verseOneTrimmed);
        var verseMinimal = document.createTextNode(verseOneTrimmed);

        classicElementType.appendChild(verseClassic);
        fancyElementType.appendChild(verseFancy);
        minimalElementType.appendChild(verseMinimal);
        elementPlacerClassic.appendChild(classicElementType);
        elementPlacerFancy.appendChild(fancyElementType);
        elementPlacerMinimal.appendChild(minimalElementType);
})

    //first api call
    var showPoets = document.getElementById('poet button');
    showPoets.addEventListener('click', function (event) {

        fetch('http://poetrydb.org/author')

            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok ffs.');
                }
            })
            .then(function (parsedResponseDB) {
                //random number IIFE  
                ((min, max) => {
                    randomNumberOne = (Math.floor(Math.random() * (max - min)) + min);
                    randomNumberTwo = (Math.floor(Math.random() * (max - min)) + min);
                    randomNumberThree = (Math.floor(Math.random() * (max - min)) + min);
                })(0, parsedResponseDB.authors.length)

                let firstPoet = parsedResponseDB.authors[randomNumberOne]; /*"Walt Martin Whitman"*/
                let firstPoetSplit = firstPoet.split(" ");

                if (firstPoetSplit.length === 1) {
                    var poet1 = `${firstPoetSplit[randomNumberOne]}`
                    var url1 = `https://en.wikipedia.org/wiki/${poet1}`
                    var searchUrl1 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${poet1}&utf8=&format=json`
                } else if (firstPoetSplit.length === 2) {
                    var poet1 = `${firstPoetSplit[0]} ${firstPoetSplit[1]}`
                    var url1 = `https://en.wikipedia.org/wiki/${firstPoetSplit[0]}_${firstPoetSplit[1]}`
                    var searchUrl1 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${firstPoetSplit[0]}%20${firstPoetSplit[1]}&utf8=&format=json`
                } else if (firstPoetSplit.length === 3) {
                    var poet1 = `${firstPoetSplit[0]} ${firstPoetSplit[1]} ${firstPoetSplit[2]}`
                    var url1 = `https://en.wikipedia.org/wiki/${firstPoetSplit[0]}_${firstPoetSplit[1]}_${firstPoetSplit[2]}`
                    var searchUrl1 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${firstPoetSplit[0]}%20${firstPoetSplit[1]}%20${firstPoetSplit[2]}&utf8=&format=json`
                } else if (firstPoetSplit.length === 4) {
                    var poet1 = `${firstPoetSplit[0]} ${firstPoetSplit[1]} ${firstPoetSplit[2]} ${firstPoetSplit[3]}`
                    var url1 = `https://en.wikipedia.org/wiki/${firstPoetSplit[0]}_${firstPoetSplit[1]}_${firstPoetSplit[2]}_${firstPoetSplit[3]}`
                    var searchUrl1 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${firstPoetSplit[0]}%20${firstPoetSplit[1]}%20${firstPoetSplit[2]}%20${firstPoetSplit[3]}&utf8=&format=json`

                } else {
                    var poet1 = "This poet has not got a name, or it's too long"
                    var url1 = "There is no link"
                    var searchUrl3 = "there is no snippet"
                }

                let secondPoet = parsedResponseDB.authors[randomNumberTwo]; /*Roger McGough*/
                let secondPoetSplit = secondPoet.split(" ");
                if (secondPoetSplit.length === 1) {
                    var poet2 = `${secondPoetSplit[0]}`
                    var url2 = `https://en.wikipedia.org/wiki/${poet2}`
                    var searchUrl2 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${poet2}&utf8=&format=json`
                } else if (secondPoetSplit.length === 2) {
                    var poet2 = `${secondPoetSplit[0]} ${secondPoetSplit[1]}`
                    var url2 = `https://en.wikipedia.org/wiki/${secondPoetSplit[0]}_${secondPoetSplit[1]}`
                    var searchUrl2 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${secondPoetSplit[0]}%20${secondPoetSplit[1]}&utf8=&format=json`
                } else if (secondPoetSplit.length === 3) {
                    var poet2 = `${secondPoetSplit[0]} ${secondPoetSplit[1]} ${secondPoetSplit[2]}`
                    var url2 = `https://en.wikipedia.org/wiki/${secondPoetSplit[0]}_${secondPoetSplit[1]}_${secondPoetSplit[2]}`
                    var searchUrl2 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${secondPoetSplit[0]}%20${secondPoetSplit[1]}%20${secondPoetSplit[2]}&utf8=&format=json`
                } else if (secondPoetSplit.length === 4) {
                    var poet2 = `${secondPoetSplit[0]} ${secondPoetSplit[1]} ${secondPoetSplit[2]} ${secondPoetSplit[3]}`
                    var url2 = `https://en.wikipedia.org/wiki/${secondPoetSplit[0]}_${secondPoetSplit[1]}_${secondPoetSplit[2]}_${secondPoetSplit[3]}`
                    var searchUrl2 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${secondPoetSplit[0]}%20${secondPoetSplit[1]}%20${secondPoetSplit[2]}%20${firstPoetSplit[3]}&utf8=&format=json`
                } else {
                    var poet2 = "This poet has not got a name, or it's too long"
                    var url2 = "There is no link"
                    var searchUrl3 = "there is no snippet"
                }

                let thirdPoet = parsedResponseDB.authors[randomNumberThree]; /*Peter Kan Dufot"*/
                let thirdPoetSplit = thirdPoet.split(" ");
                if (thirdPoetSplit.length === 1) {
                    var poet3 = thirdPoetSplit[0]
                    var url3 = `https://en.wikipedia.org/wiki/${poet3}`
                    var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${poet3}&utf8=&format=json`
                } else if (thirdPoetSplit.length === 2) {
                    var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]}`
                    var url3 = `https://en.wikipedia.org/wiki/${thirdPoetSplit[0]}_${thirdPoetSplit[1]}`
                    var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${thirdPoetSplit[0]}%20${thirdPoetSplit[1]}&utf8=&format=json`
                } else if (thirdPoetSplit.length === 3) {
                    var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]} ${thirdPoetSplit[2]}`
                    var url3 = `https://en.wikipedia.org/wiki/${thirdPoetSplit[0]}_${thirdPoetSplit[1]}_${thirdPoetSplit[2]}`
                    var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${thirdPoetSplit[0]}%20${thirdPoetSplit[1]}%20${thirdPoetSplit[2]}&utf8=&format=json`
                } else if (thirdPoetSplit.length === 4) {
                    var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]} ${thirdPoetSplit[2]} ${thirdPoetSplit[3]}`
                    var url3 = `https://en.wikipedia.org/wiki/${thirdPoetSplit[0]}_${thirdPoetSplit[1]}_${thirdPoetSplit[2]}_${thirdPoetSplit[3]}`
                    var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${thirdPoetSplit[0]}%20${thirdPoetSplit[1]}%20${thirdPoetSplit[2]}%20${thirdPoetSplit[3]}&utf8=&format=json`
                } else {
                    var poet3 = "This poet has not got a name, or it's too long"
                    var url2 = "There is no link"
                    var searchUrl3 = "there is no snippet"
                }


                fetch(searchUrl1)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (parsedResponseWiki) {
                        //console.log(`${parsedResponseWiki.query.search[0].snippet}`)
                        var snippet1 = `${parsedResponseWiki.query.search[0].snippet}... click on the link to find out more`
                        displayPoets(poet1, url1, snippet1)
                    })

                fetch(searchUrl2)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (parsedResponseWiki) {
                        //console.log(`${parsedResponseWiki.query.search[0].snippet}`)
                        var snippet2 = `${parsedResponseWiki.query.search[0].snippet}... click on the link to find out more`
                        displayPoets(poet2, url2, snippet2)
                    })

                fetch(searchUrl3)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (parsedResponseWiki) {
                        //console.log(`${parsedResponseWiki.query.search[0].snippet}`)
                        var snippet3 = `${parsedResponseWiki.query.search[0].snippet}... click on the link to find out more`
                        displayPoets(poet3, url3, snippet3)
                    })

            })

            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ', error.message);
            })

        function displayPoets(a, b, c) {

            var pOne = document.createElement("h3"); //this says what type of element you want to create
            var pTwo = document.createElement("a");
            var pThree = document.createElement("p");
            var element = document.getElementById("getPoets"); //this says where you want to put the new text - in this case with 'getPoets'
            var useLineOne = document.createTextNode(a); //this says that you want to create a 
            var useLineTwo = document.createTextNode(b);
            var useLineThree = document.createTextNode(c);

            pTwo.title = "Link to Poet's wikipedia"
            pTwo.href = b
            pTwo.target = "_blank"
            pTwo.id = "poemUrl"
            pOne.appendChild(useLineOne);
            pTwo.appendChild(useLineTwo);
            pThree.appendChild(useLineThree);
            element.appendChild(pOne);
            element.appendChild(pTwo);
            element.appendChild(pThree);
        }

    })

}, false);