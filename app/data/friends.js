// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Multiple dummy friends makes it easier to test!
// ===============================================================================

var userData = [
  {
    "name": "Ahmed",
    "photo": "https://i.ytimg.com/vi/co-dorhinoo/maxresdefault.jpg",
    "scores":[
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
  },
  {
    "name": "Joe",
    "photo": "http://realitypod.com/wp-content/uploads/2014/09/dog-acting-like-human-9.png",
    "scores":[
        3,
        2,
        2,
        4,
        1,
        1,
        5,
        1,
        3,
        1
    ]
  },
  {
    "name": "Ray Province",
    "photo": "https://avatars3.githubusercontent.com/u/42592534?s=460&v=4",
    "scores":[
        5,
        2,
        5,
        5,
        4,
        5,
        5,
        5,
        4,
        1
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userData;