// const authors = ["Adam Lindsay Gordon","Alan Seeger","Alexander Pope"];
//     var randomNumber = (Math.floor(Math.random() * (2 - 0)) + 0);

//     class Poet {
//         constructor (name, url, snippet, number) {
//             this.name = name; //get a random poet from the authors array
//             this.url = url;
//             this.snippet = snippet;
//             this.number = number;
//         };
//     };

    

//     function displayPoets() {
//         var poet1 = new Poet(authors[randomNumber], `https://en.wikipedia.org/wiki/${name}`, `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${name}&utf8=&format=json`, "1");
//         var poet2 = new Poet(authors[randomNumber], `https://en.wikipedia.org/wiki/${name}`, `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${name}&utf8=&format=json`, "2");

//         var element1 = document.getElementById(`getPoets${poet1.number}`); 
//         var element2 = document.getElementById(`getPoets${poet2.number}`); 
//         var pOne = document.createElement("h3");
//         var pTwo = document.createElement("a");
//         var pThree = document.createElement("p");
//         var useLineOne = document.createTextNode(poet1.name);
//         var useLineTwo = document.createTextNode(hrefUrl);
//         var useLineThree = document.createTextNode(websiteSnippet);
//         pOne.appendChild(useLineOne);
//         pTwo.appendChild(useLineTwo);
//         pTwo.appendChild(useLineThree);
//         element1.appendChild(pOne);
//         element1.appendChild(pTwo);
//         element1.appendChild(pThree);
//         element2.appendChild(pOne);
//         element2.appendChild(pTwo);
//         element2.appendChild(pThree);
//     }


    function threeRandomNumbers (min, max) {
        randomNumberOne = (Math.floor(Math.random() * (max - min)) + min);
        randomNumberTwo = (Math.floor(Math.random() * (max - min)) + min);
        randomNumberThree = (Math.floor(Math.random() * (max - min)) + min);
    }
    do {
        threeRandomNumbers(0, 10)
    } while ((randomNumberOne === randomNumberTwo) 
    || (randomNumberOne === randomNumberThree) 
    || (randomNumberThree === randomNumberTwo))

    console.log(randomNumberOne + " + " + randomNumberTwo + " + " + randomNumberThree)