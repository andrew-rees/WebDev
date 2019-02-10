//NOT WORKING - clearDisplay5() doesn't recognise the added <p> elements as nodes/children of Display-5

//STILL TO DO
////further - give each word a property (syllables) and use this to calculate line length, not word length - Turn it into a class of object with 2 properties - syllables and name
//// 137-144 clearDisplay - doesn't work because it can;t find the child nodes to delete, and they don't log, but they seem to be 'there'.

/*Refactor with JQuery
- fetch the list of words - https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt
- use these words for haikus

*/
var buttonCount = 0;

function controlResetButtonVisibility() {
    if (buttonCount < 2) {
        buttonCount++
        alert(`Be warned - you only have ${3 - buttonCount} more resets available!`);
    } else if (buttonCount === 2) {
        alert(`This is your last reset - from now on, trust yourself and let the words soar like a bold eagle...`);
        $('#reset').remove();
    };
};

function checkSubmission() {
    var lineOne = document.getElementById("line one").value;
    var lineTwo = document.getElementById("line two").value;
    var lineThree = document.getElementById("line three").value;
    if (lineOne.length > 0 && lineTwo.length > 0 && lineThree.length > 0) {
        $("#Display-4").remove();
        $('#keepHaiku4').remove();
        var userHaikuContainer = $("<div>").attr("id", "Display-4");
        var lineOneElement = $("<p>").text(lineOne);
        var lineTwoElement = $("<p>").text(lineTwo);
        var lineThreeElement = $("<p>").text(lineThree);
        $(`#haikuEntering`).append(userHaikuContainer);
        $('#Display-4').append(lineOneElement, lineTwoElement, lineThreeElement);
        $('#keepHaiku4').show();
    } else {
        alert("You need to add something into each box - allow that power to glisten, child...")
    };
};

document.addEventListener("DOMContentLoaded", () => {

    //Reset Button on submit own haiku can only be pressed twice 

    $('#reset').click(function () {
        controlResetButtonVisibility()
    });

    //--------------------------------------------------------------------------------//

    $('#keepHaiku4').hide()
    $('#submit').click(function () {
        checkSubmission();
    });

    //-------------------------------------------------------------//


    //Random Haiku Generation////
    // var wordsArray = []
    // fetch(`https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt`)
    //     .then(function (response) {
    //         return response.text()
    //     })
    //     .then(function (list) {
    //         //Strip out white space and adds comma
    //         list = list.replace(/\s+/g, ',')
    //         //Convert comma separated string to array
    //         wordsArray = list.split(',');
    //         console.log(wordsArray);
    //     });

    const nouns = ["world", "money", "monkey", "honey", "south", "breath", "wind", "love", "I", "you", "they", "tower", "cloud", "sun", "beyond", "trees", "melody", "hands"];
    const joins = ["on", "with", "in", "for", "will", "together", "apart", "far", "at"];
    const verbs = ["fly", "feel", "think", "love", "go", "run", "slide", "jostle", "shout", "sing", "sit", "breathe", "swoop"];
    const adjectives = ["wild", "constant", "jubilant", "red", "pale", "charmed", "blue", "green", "strong", "hopeful"];
    const adverbs = ["slowly", "gently", "fleetingly", "movingly", "calmly", "suddenly", "wholly", "lithely", "timely"];

    function newCount(word) {
        word = word.toLowerCase();
        if (word.length <= 3) {
            return 1;
        }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        return word.match(/[aeiouy]{1,2}/g).length;
    }

    function groupBySyllableCount(wordList) { //copied from https://stackoverflow.com/questions/43971774/separating-words-by-syllable-count/43973252#43973252
        var wordsBySyllableCount = {};
        for (i = 0; i < wordList.length; i++) {
            var slblCount = newCount(wordList[i]);
            if (wordsBySyllableCount[slblCount] === undefined) {
                wordsBySyllableCount[slblCount] = [wordList[i]];
            } else {
                wordsBySyllableCount[slblCount].push(wordList[i]);
            };
        };
        return wordsBySyllableCount;
    };

    var nounsBySyllableCount = groupBySyllableCount(nouns);
    console.log(nounsBySyllableCount);
    var joinsBySyllableCount = groupBySyllableCount(joins);
    console.log(joinsBySyllableCount);
    var verbsBySyllableCount = groupBySyllableCount(verbs);
    console.log(verbsBySyllableCount);
    var adverbsBySyllableCount = groupBySyllableCount(adverbs);
    console.log(adverbsBySyllableCount);
    var adjectivesBySyllableCount = groupBySyllableCount(adjectives);
    console.log(adjectivesBySyllableCount);

    var thisLine = "" //need to stop this being global

    $('#keepHaiku5').hide()

    $('#randomHaiku').click(function () {
        $("*#randomHaikuAdded").remove()
        generateLines()
    });

    //HELPER FUNCTIONS - GENERATING A RANDOM NUMBER AND PASSING THE WORD TO THE APPROPRIATE PLACE IN THE HTML DOM//

    function generateLines() { //generates the haiku
        for (i = 1; i < 4; i++) {
            //console.log(`Line ${i}`);
            let wordTypeGenerated = haikuStart();
            for (j = 0; j < 4; j++) {
                wordTypeGenerated = nextWord(wordTypeGenerated);
            };
            if (i === 2) {
                wordTypeGenerated = nextWord(wordTypeGenerated);
                wordTypeGenerated = nextWord(wordTypeGenerated);
            };
            formatLine();
        };
    };

    function formatLine() {
        thisLine = thisLine.trim();
        thisLine = thisLine.charAt(0).toUpperCase() + thisLine.substr(1);
        if (i < 3) {
            thisLine += ",";
        } else if (i === 3) {
            thisLine += ".";
        };
        console.log(thisLine);
        displayLine();
        thisLine = "";
    };

    function generateRandom(min, max) {
        return (Math.floor(Math.random() * (max - min)) + min);
    };

    function displayLine() {
        var line = $("<p>").text(thisLine).attr("id", "randomHaikuAdded");
        $('#haiku5Placeholder').append(line);
    };

    function haikuStart() {
        x = Math.floor(Math.random() * 5);
        if (x == 0) {
            generateNoun()
            return "noun"
        } else if (x == 1) {
            generateJoin()
            return "join"
        } else if (x == 2) {
            generateVerb()
            return "verb"
        } else if (x == 3) {
            generateAdjective()
            return "adjective"
        } else if (x == 4) {
            generateAdverb()
            return "adverb"
        };
    };

    function nextWord(wordTypeGenerated) {
        switch (wordTypeGenerated) {
            case "noun":
                generateAdverb();
                return wordTypeGenerated = "adverb";
            case "join":
                generateAdjective();
                return wordTypeGenerated = "adjective";
            case "verb":
                generateJoin()
                return wordTypeGenerated = "join";
            case "adjective":
                generateNoun()
                return wordTypeGenerated = "noun";
            case "adverb":
                generateVerb()
                return wordTypeGenerated = "verb";
        };
    };

    function generateNoun() {
        let thisNoun = `${nouns[generateRandom(0, nouns.length)]} `;
        return thisLine += thisNoun;
    };

    function generateJoin() {
        let thisJoin = `${joins[generateRandom(0, joins.length)]} `;
        return thisLine += thisJoin;
    };

    function generateVerb() {
        let thisVerb = `${verbs[generateRandom(0, verbs.length)]} `;
        return thisLine += thisVerb;
    };

    function generateAdjective() {
        let thisAdjective = `${adjectives[generateRandom(0, adjectives.length)]} `;
        return thisLine += thisAdjective;
    };

    function generateAdverb() {
        let thisAdverb = `${adverbs[generateRandom(0, adverbs.length)]} `;
        return thisLine += thisAdverb;
    };
}, false);