// 1) button that submits user-gen poem shows the text on the page, and can only be pressed when all lines filled
// 2) Random Haiku Generator - easy - have a bunch of words in a js file object (line 1 object, line 2 object, line 3 object), and button chooses random object strings and displays them on webpage, PART WAY. HAVE WORDS, HAVE RANDOM GENERATION, NEED TO PUT THESE INTO ARRAY FOR LINE, AND DISPLAY, NEED TO TIDY CODE AS IT'S REPETITIVE.
// 3) Button that resets user-gen only can be pressed twice, then it stops working - WORKS



//Reset Button on submit own haiku can only be pressed twice

document.addEventListener("DOMContentLoaded", () => {
    var resetVis = "visible";
    var buttonCount = 0;

    function showHideReset() {
        document.getElementById("reset").style.visibility = resetVis;
        console.log("Reset Button is " + resetVis);
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





//make Submit button check there is data in each line
//Turn user-gen haiku into text on page
//STILL TO DO
//// Allow 'reset' button to also remove the text from the page - but can't work out how to give the element I'm creating an ID when I create it






function checkSubmission() {
    var lineOne = document.getElementById("line one").value
    console.log(lineOne)
    var lineTwo = document.getElementById("line two").value
    console.log(lineTwo)
    var lineThree = document.getElementById("line three").value
    console.log(lineThree)

    if (lineOne.length > 0 && lineTwo.length > 0 && lineThree.length > 0) {

        var pOne = document.createElement("p");
        var pTwo = document.createElement("p");
        var pThree = document.createElement("p");
        var element = document.getElementById("Haiku Four");
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





//Random Haiku Generation
////create objects with words - fine
//// randomly generate them - trouble with this, copied formula isn't random between 0 and 7
//// print each word - fine
//// put each word into the array of the line eg firstLine[]
//// rules for words:
//////start random
//////after adjective comes noun
//////after adverb comes verb
//////after join comes adjective
//////after verb comes join
//////after noun comes adverb


//// implement these rules
//// line 1 and 3 are 5 words, line 2 is 7 words
////further - give each word a property (syllables) and use this to calculate line length, not word length;


}, false);


const firstLine = [];
const secondLine = [];
const thirdLine = [];

const nouns = ["world", "money", "monkey", "honey", "south", "wind", "love", "I", "you", "they", "tower"];
const joins = ["on", "with", "in", "for", "will"];
const verbs = ["fly", "feel", "think", "love", "go"];
const adjectives = ["wild", "constant", "hoping", "jubilant"];
const adverbs = ["slowly", "gently", "fleetingly", "movingly", "calmly"];
const words = [nouns, joins, verbs, adjectives, adverbs]
var randomNumber;
var randomNumberResult = [];

function generateOne (min, max) {
    for (let i = 0; i < 5; i++) {
        randomNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
        console.log(randomNumber);
        //randomNumberResult.push(randomNumber);
        
    }

}

//firstLine Generation and pushing
//running the function to produce the random numbers.
generateOne(0, nouns.length);
generateOne(0, joins.length);
generateOne(0, verbs.length);
generateOne(0, adjectives.length);
generateOne(0, adverbs.length);

//displaying the words that correspond to the above numbers
console.log(`${adjectives[randomNumber]} ${nouns[randomNumber]} ${joins[randomNumber]} ${adverbs[randomNumber]} ${verbs[randomNumber]}`);
//console.log(randomNumberResult);
//console.log(Math.round(Math.random()));