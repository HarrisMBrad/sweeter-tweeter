// #1 Dropeth the new style with how you feel...
function newStyleQuote() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); //3
}

//#2
let a = 0;
function getQuotes() {
    a = 5;
}

function newQuote() {
    alert(a); //5
}

//#3
function newQuote() {
    window.a = "How you feel now?";
}

function setGradient() {
    alert(a); 
}

//#4
let a = 1;
function setGradient() {
    var a = "test";
    alert(a); 
}

//#5
let a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5