/*Determine the user's most compatible friend using the following as a guide:

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.  

User 2 example: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference example: 2 + 1 + 2 = 5

Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.*/

//Dependencies
//=================================


//=========================================
// DATA (Main)
var friendsArr = [

  {
    name:"James Donovan Halliday",
    photo:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjyvZvw_q3gAhVR71QKHb1SDlsQjRx6BAgBEAU&url=https%3A%2F%2Freadyplayerone.fandom.com%2Fwiki%2FJames_Donovan_Halliday&psig=AOvVaw3xb8Sy3jNeyZK6qFZUceks&ust=1549778946193368",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
];
//export the array
module.exports = friendsArr;

