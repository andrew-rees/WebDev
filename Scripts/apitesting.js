//import fetch from 'node-fetch'
//const fetch = require('node-fetch')

document.addEventListener("DOMContentLoaded", () => {

    var myButton1 = document.getElementById('Button4');
    myButton1.addEventListener('click', function (event) {

        fetch('http://poetrydb.org/author')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                var siteString = JSON.stringify(myJson)
                console.log(siteString);
                var pOne = document.createElement("p");
                var element = document.getElementById("div1");
                var useLineOne = document.createTextNode(siteString);
                pOne.appendChild(useLineOne);
                element.appendChild(pOne);
            });



    });



    }, false)