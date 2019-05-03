// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================
var faker = require('faker');

var friends = [];
for (i = 0; i < 100; i++) {
    //Create 100 friend objects and push them to the friends array
    var newFriend = {
        name: faker.name.findName(),
        image: faker.image.avatar(),
        scores: [
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
        ]
    }
    friends.push(newFriend);
}
// var friendsArray = [
//     {
//         name: "Ahmed",
//         photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         scores: [
//             5,
//             1,
//             4,
//             4,
//             5,
//             1,
//             2,
//             5,
//             4,
//             1
//         ]
//     }
// ]

module.exports = friends;