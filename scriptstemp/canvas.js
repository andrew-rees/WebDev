//import fetch from 'node-fetch'
//const fetch = require('node-fetch')

document.addEventListener("DOMContentLoaded", () => {

    //canvas
    var canvasOne = document.getElementById('canvas1');
    var canvasTwo = document.getElementById('canvas2');
    var canvasThree = document.getElementById('canvas3');
    var ctxOne = canvasOne.getContext('2d');
    var ctxTwo = canvasTwo.getContext('2d');
    var ctxThree = canvasThree.getContext('2d');
    var a = 10
    var b = 10
    var c = 100
    var d = 100

    ctxOne.fillStyle = 'green';
    ctxTwo.fillStyle = 'red'
    ctxThree.fillStyle = 'black'
    ctxOne.fillRect(a, b, c, d);
    ctxTwo.fillRect(a/2, b/2, c/2, d/2);
    ctxThree.fillRect(a*2, b*2, c*2, d*2)

    var enterValueA = document.getElementById(`enterValueA`);
    enterValueA.addEventListener('input', changeA)

    function changeA () {
        a = enterValueA.value
    }

    //button

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