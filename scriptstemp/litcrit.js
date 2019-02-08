//STILL TO DO:
//// format it
//// make the 3 poets disappear when the button is pressed again - same problem as
//// think I can get rid of the triplicate creation of the poets using a for loop, so using the 'i' eg poet[i]
/// can i use a poet class (see practice.js)?

class Poet {
    constructor(index, name, webPage, snippet) {
        this.index = index;
        this.name = name;
        this.webPage = webPage;
        this.snippet = snippet;
    };
};

const authors = [
    "Adam Lindsay Gordon",
    "Alan Seeger",
    "Alexander Pope",
    "Algernon Charles Swinburne",
    "Ambrose Bierce",
    "Amy Levy",
    "Andrew Marvell",
    "Ann Taylor",
    "Anne Bradstreet",
    "Anne Bronte",
    "Anne Killigrew",
    "Anne Kingsmill Finch",
    "Annie Louisa Walker",
    "Arthur Hugh Clough",
    "Ben Jonson",
    "Charles Kingsley",
    "Charles Sorley",
    "Charlotte Bronte",
    "Charlotte Smith",
    "Christina Rossetti",
    "Christopher Marlowe",
    "Christopher Smart",
    "Coventry Patmore",
    "Edgar Allan Poe",
    "Edmund Spenser",
    "Edward Fitzgerald",
    "Edward Lear",
    "Edward Taylor",
    "Edward Thomas",
    "Eliza Cook",
    "Elizabeth Barrett Browning",
    "Emily Bronte",
    "Emily Dickinson",
    "Emma Lazarus",
    "Ernest Dowson",
    "Eugene Field",
    "Francis Thompson",
    "Geoffrey Chaucer",
    "George Eliot",
    "George Gordon, Lord Byron",
    "George Herbert",
    "George Meredith",
    "Gerard Manley Hopkins",
    "Helen Hunt Jackson",
    "Henry David Thoreau",
    "Henry Vaughan",
    "Henry Wadsworth Longfellow",
    "Hugh Henry Brackenridge",
    "Isaac Watts",
    "James Henry Leigh Hunt",
    "James Thomson",
    "James Whitcomb Riley",
    "Jane Austen",
    "Jane Taylor",
    "John Clare",
    "John Donne",
    "John Dryden",
    "John Greenleaf Whittier",
    "John Keats",
    "John McCrae",
    "John Milton",
    "John Trumbull",
    "John Wilmot",
    "Jonathan Swift",
    "Joseph Warton",
    "Joyce Kilmer",
    "Julia Ward Howe",
    "Jupiter Hammon",
    "Katherine Philips",
    "Lady Mary Chudleigh",
    "Lewis Carroll",
    "Lord Alfred Tennyson",
    "Louisa May Alcott",
    "Major Henry Livingston, Jr.",
    "Mark Twain",
    "Mary Elizabeth Coleridge",
    "Matthew Arnold",
    "Matthew Prior",
    "Michael Drayton",
    "Oliver Goldsmith",
    "Oliver Wendell Holmes",
    "Oscar Wilde",
    "Paul Laurence Dunbar",
    "Percy Bysshe Shelley",
    "Philip Freneau",
    "Phillis Wheatley",
    "Ralph Waldo Emerson",
    "Richard Crashaw",
    "Richard Lovelace",
    "Robert Browning",
    "Robert Burns",
    "Robert Herrick",
    "Robert Louis Stevenson",
    "Robert Southey",
    "Robinson",
    "Rupert Brooke",
    "Samuel Coleridge",
    "Samuel Johnson",
    "Sarah Flower Adams",
    "Sidney Lanier",
    "Sir John Suckling",
    "Sir Philip Sidney",
    "Sir Thomas Wyatt",
    "Sir Walter Raleigh",
    "Sir Walter Scott",
    "Stephen Crane",
    "Thomas Campbell",
    "Thomas Chatterton",
    "Thomas Flatman",
    "Thomas Gray",
    "Thomas Hood",
    "Thomas Moore",
    "Thomas Warton",
    "Walt Whitman",
    "Walter Savage Landor",
    "Wilfred Owen",
    "William Allingham",
    "William Barnes",
    "William Blake",
    "William Browne",
    "William Cowper",
    "William Cullen Bryant",
    "William Ernest Henley",
    "William Lisle Bowles",
    "William Morris",
    "William Shakespeare",
    "William Topaz McGonagall",
    "William Vaughn Moody",
    "William Wordsworth"
]

function threeRandomNumbers(min, max) {
    randomNumberOne = (Math.floor(Math.random() * (max - min)) + min);
    randomNumberTwo = (Math.floor(Math.random() * (max - min)) + min);
    randomNumberThree = (Math.floor(Math.random() * (max - min)) + min);
};
do {
    threeRandomNumbers(0, authors.length)
} while ((randomNumberOne === randomNumberTwo) ||
    (randomNumberOne === randomNumberThree) ||
    (randomNumberThree === randomNumberTwo));

var firstPoet = authors[randomNumberOne];
var secondPoet = authors[randomNumberTwo];
var thirdPoet = authors[randomNumberThree];


var poetsInformation = [];

function displayHeader(poetName, index) {
    var header = $("<h3>").text(poetName);
    $(`#getPoets${index}`).append(header);
};

function displayLink(hrefUrl, index) {
    var link = $("<a>").text("Link to Poet's wikipedia").attr('href', hrefUrl).attr("target", "_blank")
    $(`#getPoets${index}`).append(link);
};

function displaySnippet(websiteSnippet, index) {
    var snip = $("<p>").text(websiteSnippet);
    $(`#getPoets${index}`).append(snip);
};

document.addEventListener("DOMContentLoaded", () => {

    $("#poetButton").click(function () {

        poetsInformation.push(new Poet(1, firstPoet));
        poetsInformation.push(new Poet(2, secondPoet));
        poetsInformation.push(new Poet(3, thirdPoet));

        poetsInformation.forEach(value => {
            var searchName = value.name.replace(" ", "%20").replace(" ", "%20")
            var searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchName}&utf8=&format=json`;
            var webPageName = value.name.replace(" ", "_").replace(" ", "_")
            value.webPage = `https://en.wikipedia.org/wiki/${webPageName}`;
            fetch(searchUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (parsedResponseWiki) {
                    value.snippet = `${parsedResponseWiki.query.search[0].snippet}... click on the link to find out more`;
                    displayHeader(value.name, value.index);
                    displayLink(value.webPage, value.index);
                    displaySnippet(value.snippet, value.index);
                });
        });


    });

    function checkSubmission() {
        var authorBox = $("#author").val()
        console.log(authorBox)
        var poemBox = $("#text-area-poem").val()
        console.log(poemBox)

        if (authorBox.length == 0 || poemBox.length == 0) {
            alert("You need to have a title and a poem in the boxes to submit")
        } else {
            //proceed to display the poem
            console.log("we can submit")
        }

    };
    $("#fancy").click(function () {
        checkSubmission();
    })
}, false);