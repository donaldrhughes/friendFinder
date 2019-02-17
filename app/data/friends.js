//Dependencies
//=================================
var Friend = require("./Friend");
var makeid = require("./makeid");
var makeScores = require("./makeScores");

//=========================================
// DATA (Main)
var totalScore;
var diff;

// Example Friends with names etc
var james = new Friend("James Donovan Halliday", "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjyvZvw_q3gAhVR71QKHb1SDlsQjRx6BAgBEAU&url=https%3A%2F%2Freadyplayerone.fandom.com%2Fwiki%2FJames_Donovan_Halliday&psig=AOvVaw3xb8Sy3jNeyZK6qFZUceks&ust=1549778946193368", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1], totalScore, diff);
james.totalScore = james.randomRes.reduce(getSum);

var indigo = new Friend("Indigo Montoya", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ragan.com%2Fwp-content%2Fuploads%2F2017%2F09%2FInigo_Montoya_at_Work.jpg&imgrefurl=https%3A%2F%2Fwww.ragan.com%2F8-reasons-you-should-be-more-like-inigo-montoya-at-work%2F&docid=rEV1QPl3CpMr4M&tbnid=VDqbWeM1VFl5DM%3A&vet=10ahUKEwj0nerAqbDgAhU9JDQIHdWHBVYQMwhqKAAwAA..i&w=600&h=400&bih=713&biw=990&q=inigo%20montoya&ved=0ahUKEwj0nerAqbDgAhU9JDQIHdWHBVYQMwhqKAAwAA&iact=mrc&uact=8", [4, 10, 4, 6, 7, 7, 2, 5, 8, 8], totalScore, diff);
indigo.totalScore = indigo.randomRes.reduce(getSum);

var hugh = new Friend("Hugh Grant", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTE5NTU2MzE2MjM2NjQ1ODk5%2Fhugh-grant-9318171-1-402.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fpeople%2Fhugh-grant-9318171&docid=10yUpee38Q9UUM&tbnid=2ClTiOkudJsXFM%3A&vet=10ahUKEwjQmquPqrDgAhU8GTQIHYGhDhsQMwhsKAEwAQ..i&w=1200&h=1200&bih=713&biw=990&q=hugh%20grant&ved=0ahUKEwjQmquPqrDgAhU8GTQIHYGhDhsQMwhsKAEwAQ&iact=mrc&uact=8", [3, 10, 6, 5, 3, 4, 1, 10, 6, 9], totalScore, diff);
hugh.totalScore = hugh.randomRes.reduce(getSum);

var charlize = new Friend("Charlize Theron", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Far_1%3A1%252Cc_fill%252Ccs_srgb%252Cg_face%252Cq_auto%3Agood%252Cw_300%2FMTE5NDg0MDU1MjI3NTAwMDQ3%2Fcharlize-theron-9542564-2-402.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fpeople%2Fcharlize-theron-9542564&docid=YezzpiEu_bRP0M&tbnid=hXwaWwls1i9BZM%3A&vet=10ahUKEwilr-vqqbDgAhVCHTQIHQLyB2wQMwhtKAIwAg..i&w=300&h=300&bih=713&biw=990&q=charlize%20theron&ved=0ahUKEwilr-vqqbDgAhVCHTQIHQLyB2wQMwhtKAIwAg&iact=mrc&uact=8", [8, 2, 10, 7, 6, 1, 9, 7, 7, 8], totalScore, diff);
charlize.totalScore = charlize.randomRes.reduce(getSum);

var amy = new Friend("Amy Schumer", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.bwwstatic.com%2Fheadshots%2F402388sm.jpg&imgrefurl=https%3A%2F%2Fwww.broadwayworld.com%2Fpeople%2Fheadshot%2FAmy-Schumer%2F&docid=iZlwZR7B2WY_WM&tbnid=alLDZtRyLldSEM%3A&vet=10ahUKEwi4qM22qrDgAhXeGDQIHRreByYQMwhNKAAwAA..i&w=204&h=254&bih=713&biw=990&q=amy%20schumer%20headshot&ved=0ahUKEwi4qM22qrDgAhXeGDQIHRreByYQMwhNKAAwAA&iact=mrc&uact=8", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1], totalScore, diff);
amy.totalScore = amy.randomRes.reduce(getSum);

var kate = new Friend("Kate Winslet", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd3%2F58%2F83%2Fd35883dc43d7f48e1b7825245844fcde.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F236227942929717166%2F&docid=M9PuQgKg1EYKdM&tbnid=tWNvpmashKk5wM%3A&vet=10ahUKEwjNoOjSqrDgAhU6JzQIHRiJCi8QMwhNKAEwAQ..i&w=500&h=588&bih=713&biw=990&q=kate%20winslet%20headshot&ved=0ahUKEwjNoOjSqrDgAhU6JzQIHRiJCi8QMwhNKAEwAQ&iact=mrc&uact=8", [6, 6, 3, 10, 10, 2, 3, 3, 6, 2], totalScore, diff);
kate.totalScore = kate.randomRes.reduce(getSum);

//EXTRA --  Friend Generator

//The main array of friends
var friendsArr = [];

//how many friends do you want? =)
var friendsNum = 2;

var friendsJson = "";
var randomObj = {
    //Friend Generation Method
    generateFriends: function () {
        for (var i = 0; i < friendsNum; i++) {
            randomName = makeid();
            randomRes = makeScores();
            totalScore = Number(randomRes.reduce(getSum));
            randomFriend = new Friend(randomName, "#", randomRes, totalScore, diff);
            randomFriend[i] = randomFriend;
            friendsArr.push(randomFriend[i]);
        }
        friendsArr.push(kate, james, charlize, indigo, hugh, amy);
        return friendsArr;
    },
    //Method to Generate 1 friend stats
    generate: function () {
        randomName = makeid();
        randomRes = makeScores();
        totalScore = Number(randomRes.reduce(getSum));
        randomFriend = new Friend(randomName, "#", randomRes, totalScore, diff);

    }
}
//generates all the friends
randomObj.generateFriends();

//create an object with many friends
var dataObj = {
    friend0: new Friend(randomName, "#", randomRes, totalScore, diff),
    friend1: {},
    friend2: {},
    friend3: {},
    friend4: james,
    friend5: indigo,
    friend6: hugh,
    friend7: charlize,
    friend8: kate,
    friend9: amy

};

randomObj.generate();
dataObj.friend1 = new Friend(randomName, "#", randomRes, totalScore, diff)
randomObj.generate();
dataObj.friend2 = new Friend(randomName, "#", randomRes, totalScore, diff)
randomObj.generate();
dataObj.friend3 = new Friend(randomName, "#", randomRes, totalScore, diff)



console.log(dataObj)

//export the dataObj
module.exports = dataObj;


//getSum function to tally the results
function getSum(total, num) {
    return total + num;
  };