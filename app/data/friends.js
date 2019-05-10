//Dependencies
//=================================
var Friend = require("./Friend");
var makeid = require("./makeid");
var makeScores = require("./makeScores");

//=========================================
// DATA (Main)
var totalScore;
var diff;
var defaultImg = "https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?w=300&ssl=1";
// Example Friends with names etc
var james = new Friend("James Donovan Halliday", "https://cdn.vox-cdn.com/thumbor/YN55VGeMVgObSYp4D3nxCYTotHs=/0x0:2894x1200/620x413/filters:focal(1216x369:1678x831):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59247431/RPO_TRLR_0060.0.jpg", [5, 1, 2, 2, 3, 1, 2, 5, 4, 1], totalScore, diff);
james.totalScore = james.randomRes.reduce(getSum);

var indigo = new Friend("Indigo Montoya", "https://i.pinimg.com/236x/9b/76/8e/9b768e465ece0acb4f1c9f001caf36b3.jpg", [4, 2, 4, 4, 5, 1, 2, 5, 1, 1], totalScore, diff);
indigo.totalScore = indigo.randomRes.reduce(getSum);

var hugh = new Friend("Hugh Grant", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hugh_Grant_Cannes.jpg/170px-Hugh_Grant_Cannes.jpg", [3, 5, 2, 5, 3, 4, 1, 3, 2, 1], totalScore, diff);
hugh.totalScore = hugh.randomRes.reduce(getSum);

var charlize = new Friend("Charlize Theron", "https://s3-us-west-1.amazonaws.com/s3.kllcfm.radio.com/s3fs-public/styles/delta__775x515/public/charlize775.jpg?itok=HMRKD_Ul&c=183cd5bdc19cc7c05aae92a05fb6ec07", [5, 4, 1, 2, 1, 1, 4, 3, 3, 2], totalScore, diff);
charlize.totalScore = charlize.randomRes.reduce(getSum);

var amy = new Friend("Amy Schumer", "https://m.media-amazon.com/images/M/MV5BOTQ3MDc1MTI2Nl5BMl5BanBnXkFtZTcwMzYxMDgzOQ@@._V1_SY1000_CR0,0,911,1000_AL_.jpg", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1], totalScore, diff);
amy.totalScore = amy.randomRes.reduce(getSum);

var kate = new Friend("Kate Winslet", "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxODI4MjgyODkz/kate-winslet-9534599-1-402.jpg", [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], totalScore, diff);
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
            randomFriend = new Friend(randomName, defaultImg, randomRes, totalScore, diff);
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
        randomFriend = new Friend(randomName, defaultImg, randomRes, totalScore, diff);

    }
}
//generates all the friends
randomObj.generateFriends();

//create an object with many friends
var dataObj = {
    friend0: new Friend(randomName, defaultImg, randomRes, totalScore, diff),
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
dataObj.friend1 = new Friend(randomName, defaultImg, randomRes, totalScore, diff)
randomObj.generate();
dataObj.friend2 = new Friend(randomName, defaultImg, randomRes, totalScore, diff)
// randomObj.generate();
// dataObj.friend3 = new Friend(randomName, defaultImg, randomRes, totalScore, diff)



console.log(dataObj)

//export the dataObj
module.exports = dataObj;


//getSum function to tally the results
function getSum(total, num) {
    return total + num;
  };