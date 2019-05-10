
//EXTRA function which returns the results of a Generated 10 question Array
var makeScores = function makeScores() {
    //generate a number between 1-10
   
    var result = Array.from({ length: 10 }, () => Math.floor(Math.random() * 2));
    //generate any number
    // var result = Array.from({ length: 10 }, () => Math.floor(Math.random() * 5) + 1);

    return result;
}


//Build a Giphy Response that pulls a random image - Not completed
module.exports = makeScores;