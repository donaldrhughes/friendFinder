/*
EXTRA---This generates a Random user object that has a Capital First and Last Name and a Defined 
number of addtl lower case letters ---very cool!!!!1*/
var makeid = function makeid() {

    var text = "";
    var text2 = "";
    var text3 = "";
    var text4 = "";
    var alphaCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 1; i++) {
        text += alphaCaps.charAt(Math.floor(Math.random() * alphaCaps.length));
    };
    for (var i = 0; i < 4; i++) {
        text2 += alphaLower.charAt(Math.floor(Math.random() * alphaLower.length));
    };
    for (var i = 0; i < 1; i++) {
        text3 += alphaCaps.charAt(Math.floor(Math.random() * alphaCaps.length));
    };
    for (var i = 0; i < 4; i++) {
        text4 += alphaLower.charAt(Math.floor(Math.random() * alphaLower.length));
    };
    finalText = text + text2 + " " + text3 + text4;
    return finalText;
}

module.exports = makeid;