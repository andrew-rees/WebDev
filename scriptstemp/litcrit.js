//STILL TO DO:
//// format it
//// make the 3 poets disappear when the button is pressed again - same problem as
//// think I can get rid of the triplicate creation of the poets using a for loop, so using the 'i' eg poet[i]
/// can i use a poet class (see practice.js)?

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


document.addEventListener("DOMContentLoaded", () => {

    var showPoets = document.getElementById('poet button');
    showPoets.addEventListener('click', function (event) {

        //need to require the poets array

        //random number IIFE  
        ((min, max) => {
            randomNumberOne = (Math.floor(Math.random() * (max - min)) + min);
            randomNumberTwo = (Math.floor(Math.random() * (max - min)) + min);
            randomNumberThree = (Math.floor(Math.random() * (max - min)) + min);
        })(0, authors.length)

        let firstPoet = authors[randomNumberOne];
        let firstPoetSplit = firstPoet.split(" ");
        console.log(firstPoet)

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

        let secondPoet = authors[randomNumberTwo];
        let secondPoetSplit = secondPoet.split(" ");
        console.log(secondPoet)
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

        let thirdPoet = authors[randomNumberThree];
        let thirdPoetSplit = thirdPoet.split(" ");
        console.log(thirdPoet)
        if (thirdPoetSplit.length === 1) {
            var poet3 = thirdPoetSplit[0];
            var url3 = `https://en.wikipedia.org/wiki/${poet3}`;
            var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${poet3}&utf8=&format=json`;
        } else if (thirdPoetSplit.length === 2) {
            var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]}`;
            var url3 = `https://en.wikipedia.org/wiki/${thirdPoetSplit[0]}_${thirdPoetSplit[1]}`;
            var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${thirdPoetSplit[0]}%20${thirdPoetSplit[1]}&utf8=&format=json`
        } else if (thirdPoetSplit.length === 3) {
            var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]} ${thirdPoetSplit[2]}`;
            var url3 = `https://en.wikipedia.org/wiki/${thirdPoetSplit[0]}_${thirdPoetSplit[1]}_${thirdPoetSplit[2]}`;
            var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${thirdPoetSplit[0]}%20${thirdPoetSplit[1]}%20${thirdPoetSplit[2]}&utf8=&format=json`
        } else if (thirdPoetSplit.length === 4) {
            var poet3 = `${thirdPoetSplit[0]} ${thirdPoetSplit[1]} ${thirdPoetSplit[2]} ${thirdPoetSplit[3]}`;
            var url3 = `https://en.wikipedia.org/wiki/${thirdPoetSplit[0]}_${thirdPoetSplit[1]}_${thirdPoetSplit[2]}_${thirdPoetSplit[3]}`;
            var searchUrl3 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${thirdPoetSplit[0]}%20${thirdPoetSplit[1]}%20${thirdPoetSplit[2]}%20${thirdPoetSplit[3]}&utf8=&format=json`
        } else {
            var poet3 = "This poet has not got a name, or it's too long";
            var url2 = "There is no link";
            var searchUrl3 = "there is no snippet";
        }

        fetch(searchUrl1)
            .then(function (response) {
                return response.json();
            })
            .then(function (parsedResponseWiki) {
                var snippet1 = `${parsedResponseWiki.query.search[0].snippet}... click on the link to find out more`;
                displayPoets(poet1, url1, snippet1, "1");
                //console.log(snippet1)
            })

        fetch(searchUrl2)
            .then(function (response) {
                return response.json();
            })
            .then(function (parsedResponseWiki) {
                var snippet2 = `${parsedResponseWiki.query.search[0].snippet}... click on the link to find out more`;
                displayPoets(poet2, url2, snippet2, "2");
                //console.log(snippet2)
            })

        fetch(searchUrl3)
            .then(function (response) {
                return response.json();
            })
            .then(function (parsedResponseWiki) {
                var snippet3 = `${parsedResponseWiki.query.search[0].snippet}... click on the link to find out more`;
                displayPoets(poet3, url3, snippet3, "3");
                //console.log(snippet3)
            })

        function displayPoets(poetName, hrefUrl, websiteSnippet, poetNumber) {
            var element = document.getElementById(`getPoets${poetNumber}`); //this says where you want to put the new text - in this case with 'getPoets'
            var pOne = document.createElement("h3"); //this says what type of element you want to create
            var pTwo = document.createElement("a");
            var pThree = document.createElement("p");

            var useLineOne = document.createTextNode(poetName); //this says that you want to create a 
            var useLineTwo = document.createTextNode(hrefUrl);
            var useLineThree = document.createTextNode(websiteSnippet);

            pTwo.title = "Link to Poet's wikipedia";
            pTwo.href = hrefUrl;
            pTwo.target = "_blank";
            pTwo.id = "poemUrl";
            pOne.appendChild(useLineOne);
            pTwo.appendChild(useLineTwo);
            pThree.appendChild(useLineThree);
            element.appendChild(pOne);
            element.appendChild(pTwo);
            element.appendChild(pThree);
        };
    });

    


    function checkSubmission() {
        var authorBox = document.getElementById("author").value
        console.log(authorBox)
        var poemBox = document.getElementById("text-area-poem").value
        console.log(poemBox)

        if (authorBox.length == 0 || poemBox.length == 0) {
            alert("You need to have a title and a poem in the boxes to submit")
        } else {
            //proceed to display the poem
            console.log("we can submit")
        }

    };

    var submitButton = document.getElementById ('fancy');
    submitButton.addEventListener('click', function (event) {
        checkSubmission();
    });

}, false);

