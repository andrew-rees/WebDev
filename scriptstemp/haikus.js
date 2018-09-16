//NOT WORKING - clearDisplay5() doesn't recognise the added <p> elements as nodes/children of Display-5

//STILL TO DO
////further - give each word a property (syllables) and use this to calculate line length, not word length - Turn it into a class of object with 2 properties - syllables and name
//// 137-144 clearDisplay - doesn't work because it can;t find the child nodes to delete, and they don't log, but they seem to be 'there'.

document.addEventListener("DOMContentLoaded", () => {

    //Reset Button on submit own haiku can only be pressed twice 

    var resetVis = "visible";
    var buttonCount = 0;

    function showHideReset() {
        document.getElementById("reset").style.visibility = resetVis;
        //console.log("Reset Button is " + resetVis);
    }
    showHideReset()

    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function (event) {
        if (buttonCount < 2) {
            buttonCount++
            console.log(buttonCount);
            alert(`Be warned - you only have ${3 - buttonCount} more resets available!`);
        } else if (buttonCount === 2) {
            alert(`This is your last reset - from now on, trust yourself and let the words soar like a bold eagle...`);
            resetVis = "hidden";
            showHideReset();
            console.log(buttonCount);
            console.log("Reset Button is " + resetVis);
        }
    });


    //--------------------------------------------------------------------------------//


    var userHaikuVis = "hidden"; //hides the element before button pressed

    function showHideUserHaiku() {
        document.getElementById("Display-4").style.visibility = userHaikuVis; //hides the element so the CSS doesn't appear on page
        document.getElementById("Keep Haiku 4").style.visibility = userHaikuVis;
    }
    showHideUserHaiku()

    function checkSubmission() {
        var lineOne = document.getElementById("line one").value
        console.log(lineOne)
        var lineTwo = document.getElementById("line two").value
        console.log(lineTwo)
        var lineThree = document.getElementById("line three").value
        console.log(lineThree)



        if (lineOne.length > 0 && lineTwo.length > 0 && lineThree.length > 0) {
            userHaikuVis = "visible"; //shows the element
            showHideUserHaiku();

            var pOne = document.createElement("p");
            var pTwo = document.createElement("p");
            var pThree = document.createElement("p");
            var element = document.getElementById("Display-4");
            var useLineOne = document.createTextNode(lineOne);
            var useLineTwo = document.createTextNode(lineTwo);
            var useLineThree = document.createTextNode(lineThree);

            pOne.appendChild(useLineOne);
            pTwo.appendChild(useLineTwo);
            pThree.appendChild(useLineThree);
            element.appendChild(pOne);
            element.appendChild(pTwo);
            element.appendChild(pThree);

            //Put text on page:
            ////turn each box into a string if lineOne Two Three aren't already
            ////display each string in html on the page
            ////format those strings in html and scss
        } else {
            alert("You need to add something into each box - allow that power to glisten, child...")
        }

    }

    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function (event) {
        checkSubmission();
    });


    //-------------------------------------------------------------//


    //Random Haiku Generation////




    // VARIBLES AND ARRAYS
    let unformattedFirstLine = ""
    let unformattedSecondLine = ""
    let unformattedThirdLine = ""
    let firstLine = ""
    let secondLine = ""
    let thirdLine = ""


    const nouns = ["world", "money", "monkey", "honey", "south", "breath", "wind", "love", "I", "you", "they", "tower", "cloud", "sun", "beyond", "trees", "melody", "hands"];
    const joins = ["on", "with", "in", "for", "will", "together", "apart", "far", "at"];
    const verbs = ["fly", "feel", "think", "love", "go", "run", "slide", "jostle", "shout", "sing", "sit", "breathe", "swoop"];
    const adjectives = ["wild", "constant", "jubilant", "red", "pale", "charmed", "blue", "green", "strong", "hopeful"];
    const adverbs = ["slowly", "gently", "fleetingly", "movingly", "calmly", "suddenly", "wholly", "lithely", "timely"];
    var randomNumber;
    var randomHaikuVis = "hidden"; //hides the element before button pressed
    var numberOfRandomHaikus = 0 //stores number of haikus generated        
    var which = "" //holds which type of word has just been used

    function showHideRandomHaiku() {
        document.getElementById("Display-5").style.visibility = randomHaikuVis; //hides the element so the CSS doesn't appear on page
        document.getElementById("Keep Haiku 5").style.visibility = randomHaikuVis;
    }
    showHideRandomHaiku()



    var randomHaiku = document.getElementById('Random Haiku');
    randomHaiku.addEventListener('click', function (event) {
        //console.log(document.getElementById("Display-5"))
        var displayFive = document.getElementById("Display-5");
        console.log(displayFive)
            let one = displayFive.childNodes[0]
            console.log(one);
            let two = displayFive.childNodes[2]
            console.log(two);
            let three = displayFive.childNodes[3]
            console.log(three);
            let count = displayFive.childNodeCount
            console.log(count)
            var doesIt = displayFive.hasChildNodes()
            console.log(doesIt)
        
        
        //clearing the existing dom html nodes to allow new ones to be created and prevent duplication on screen (Doesn't Work)
        // function clearDisplay5() {
        //     var display5 = document.getElementById("Display-5");
        //     display5.removeChild(display5.childNodes[0]);
        //     display5.removeChild(display5.childNodes[1]);
        //     display5.removeChild(display5.childNodes[2]);
        // }
        // clearDisplay5();
        randomHaikuVis = "hidden"
        showHideRandomHaiku()

        function generateHaiku() { //generates the haiku
            randomHaikuVis = "visible"; //shows the element
            showHideRandomHaiku();
            numberOfRandomHaikus++
            console.log(numberOfRandomHaikus);


            ((whichLine) => { //generates Line One
                console.log(`Line ${whichLine}:`)
                haikuStart(whichLine); //starts the poem
                nextWord(whichLine); //displays a word depending on the type of the previous word
                nextWord(whichLine); //ditto
                nextWord(whichLine);
                nextWord(whichLine);
                var trimmedFirstLine = unformattedFirstLine.trim();
                firstLine = trimmedFirstLine.charAt(0).toUpperCase() + trimmedFirstLine.substr(1);
                firstLine += ","
                console.log(firstLine); //logs the array of words generated by the functions above
                displayLine(whichLine); //displays the line in the right place in the HTML DOM
                unformattedFirstLine = ""; //clears the array so if you press Generate button again, it shows a new haiku
            })(1) //calls the function and sets whichLine to 1

            function generateTwo(whichLine) {
                console.log(`Line ${whichLine}:`)
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                var trimmedSecondLine = unformattedSecondLine.trim();
                secondLine = trimmedSecondLine.charAt(0).toUpperCase() + trimmedSecondLine.substr(1);
                secondLine += ","
                console.log(secondLine)
                displayLine(whichLine)
                unformattedSecondLine = "";
            }
            generateTwo(2);

            function generateThree(whichLine) {
                console.log(`Line ${whichLine}:`)
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                nextWord(whichLine);
                var trimmedThirdLine = unformattedThirdLine.trim();
                thirdLine = trimmedThirdLine.charAt(0).toUpperCase() + trimmedThirdLine.substr(1);
                thirdLine += "."
                console.log(thirdLine)
                displayLine(whichLine)
                unformattedThirdLine = "";
            };
            generateThree(3);

        }
        generateHaiku()

    });



    //HELPER FUNCTIONS - GENERATING A RANDOM NUMBER AND PASSING THE WORD TO THE APPROPRIATE PLACE IN THE HTML DOM//

    function generateRandom(min, max) { //generates a random number for use elsewhere
        randomNumber = (Math.floor(Math.random() * (max - min)) + min);
    };

    function displayLine(whichLine) { //displays the text in the right place

        let para = document.createElement("p");
        para.setAttribute('id', 'Random-Haiku-Line');
        let element = document.getElementById("Display-5");

        if (whichLine == 1) {
            let node = document.createTextNode(firstLine);
            para.appendChild(node);
            element.appendChild(para);
        } else if (whichLine == 2) {
            let node = document.createTextNode(secondLine);
            para.appendChild(node);
            element.appendChild(para);
        } else if (whichLine == 3) {
            let node = document.createTextNode(thirdLine);
            para.appendChild(node);
            element.appendChild(para);
        } else {
            console.log("whichLine variable has no value")
        }



    };

    function haikuStart(whichLine) { //starts the haiku with a random word

        x = Math.floor(Math.random() * 5);
        if (x == 0) {
            generateNoun(whichLine)
            which = "noun"
        } else if (x == 1) {
            generateJoin(whichLine)
            which = "join"
        } else if (x == 2) {
            generateVerb(whichLine)
            which = "verb"
        } else if (x == 3) {
            generateAdjective(whichLine)
            which = "adjective"
        } else if (x == 4) {
            generateAdverb(whichLine)
            which = "adverb"
        }
    };

    function nextWord(whichLine) { //chooses the next word depending on the last

        switch (which) {
            case "noun":
                generateAdverb(whichLine)
                which = "adverb"
                break;
            case "join":
                generateAdjective(whichLine)
                which = "adjective"
                break;
            case "verb":
                generateJoin(whichLine)
                which = "join"
                break;
            case "adjective":
                generateNoun(whichLine)
                which = "noun"
                break;
            case "adverb":
                generateVerb(whichLine)
                which = "verb"
                break;
        }

    };

    //GENERATING THE WORDS//

    function generateNoun(whichLine) {
        generateRandom(0, nouns.length)
        let thisNoun = `${nouns[randomNumber]} `
        //console.log(`thisNoun: ${thisNoun}`)
        if (whichLine == 1) {
            //firstLine.push(thisNoun)
            unformattedFirstLine += thisNoun
            //console.log(firstLine)
        } else if (whichLine == 2) {
            unformattedSecondLine += thisNoun
        } else if (whichLine == 3) {
            unformattedThirdLine += thisNoun;
        } else {
            console.log("whichLine has no value")
        }

    };

    function generateJoin(whichLine) {
        generateRandom(0, joins.length)
        let thisJoin = `${joins[randomNumber]} `
        //console.log(`thisJoin: ${thisJoin}`)
        if (whichLine == 1) {
            //firstLine.push(thisJoin)
            unformattedFirstLine += thisJoin
            //console.log(firstLine)
        } else if (whichLine == 2) {
            unformattedSecondLine += thisJoin
        } else if (whichLine == 3) {
            unformattedThirdLine += thisJoin;
        } else {
            console.log("whichLine has no value")
        }
    };

    function generateVerb(whichLine) {
        generateRandom(0, verbs.length)
        let thisVerb = `${verbs[randomNumber]} `
        //console.log(`thisVerb: ${thisVerb}`)
        if (whichLine == 1) {
            //firstLine.push(thisVerb)
            unformattedFirstLine += thisVerb
            //console.log(firstLine)
        } else if (whichLine == 2) {
            unformattedSecondLine += thisVerb
        } else if (whichLine == 3) {
            unformattedThirdLine += thisVerb;
        } else {
            console.log("whichLine has no value")
        }
    };

    function generateAdjective(whichLine) {
        generateRandom(0, adjectives.length)
        let thisAdjective = `${adjectives[randomNumber]} `
        //console.log(`thisAdjective: ${thisAdjective}`)
        if (whichLine == 1) {
            //firstLine.push(thisAdjective)
            unformattedFirstLine += thisAdjective
            //console.log(firstLine)
        } else if (whichLine == 2) {
            unformattedSecondLine += thisAdjective
        } else if (whichLine == 3) {
            unformattedThirdLine += thisAdjective;
        } else {
            console.log("whichLine has no value")
        }
    };

    function generateAdverb(whichLine) {
        generateRandom(0, adverbs.length)
        let thisAdverb = `${adverbs[randomNumber]} `
        //console.log(`thisAdverb: ${thisAdverb}`)
        if (whichLine == 1) {
            //firstLine.push(thisAdverb)
            unformattedFirstLine += thisAdverb
            //console.log(firstLine)
        } else if (whichLine == 2) {
            unformattedSecondLine += thisAdverb
        } else if (whichLine == 3) {
            unformattedThirdLine += thisAdverb;
        } else {
            console.log("whichLine has no value")
        }
    };





}, false);