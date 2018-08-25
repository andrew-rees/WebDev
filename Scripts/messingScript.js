//ensure the DOM (in this case, HTML and CSS) are loaded before doing anything



document.addEventListener("DOMContentLoaded", () => {
    // var myButton = document.getElementById('div1');
    // myButton.addEventListener('click', function (event) {
    //     alert('One of the Buttons pressed!');

    // });
    var buttonCount = 1;
    var showHideCurrent1 = "hidden";
    var showHideCurrent2 = "hidden";
    var showHideCurrent3 = "visible";


    function showHideBack() {
        document.getElementById("hiddenDiv").style.visibility = showHideCurrent1;
        //console.log("showHideBack works, and showHideCurrent1 is:" + showHideCurrent1);
    }
    showHideBack()

    function showHideButton() {
        document.getElementById("Button3").style.visibility = showHideCurrent2;
        document.getElementById("Button1").style.visibility = showHideCurrent3;
        //console.log("showHideButton works, and showHideCurrent2 is:" + showHideCurrent2);
        //console.log("showHideCurrent3 is: " + showHideCurrent3);
    }
    showHideButton()

    var myButton1 = document.getElementById('Button1');
    myButton1.addEventListener('click', function (event) {
        if (buttonCount === 1) {
            let suffix = "st"
            let c = confirm(`Button 1 pressed for the ${buttonCount + suffix} time. Are you sure?`);
            if (c == true) {
                buttonCount++
                //console.log(buttonCount)
            }
        } else if (buttonCount === 2) {
            let suffix = "nd"
            let c = confirm(`Button 1 pressed for the ${buttonCount + suffix} time. Are you sure?`);
            if (c == true) {
                buttonCount++
                //console.log(buttonCount)
            }
        } else if (buttonCount === 3) {
            let suffix = "rd"
            alert(`Seriously, that's the ${buttonCount + suffix} if you press it again you'll get it bad.`)
            buttonCount++
            //console.log(buttonCount)
        } else if (buttonCount > 3) {
            var d = confirm(`Are you seriously that stupid?`);
            if (d === true) {
                showHideCurrent2 = "visible"
                showHideCurrent3 = "hidden"
                //console.log(showHideCurrent2)
                //console.log(showHideCurrent3);
                showHideButton()
            }
        }
    });

    var myButton3 = document.getElementById('Button3');
    myButton3.addEventListener('click', function (event) {
        showHideCurrent1 = "visible";
        showHideCurrent2 = "hidden";
        //console.log(showHideCurrent1)
        //console.log(showHideCurrent2);
        showHideBack()
        showHideButton()
    })
}, false);








//Event Listener that fires on pressing button 1, but doesn't work (Uncaught TypeError: Cannot read property 'addEventListener' of null at messingScript.js:12)

// var myButton = document.getElementById('Button1');
// myButton.addEventListener('click', function (event) {
//     alert('Button pressed!');
//     console.log("The function worked")
// });

//Suggestion to run the function window.onload

// window.onload=function(){
//     var mb = document.getElementById("Button1");
//     mb.addEventListener("click", handler);
// }

// function handler() {
//     alert("You clicked on me, Button 1");
// }