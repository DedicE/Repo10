function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Michael Jackson",
            title: "Billie Jean",
            release_year: 1983,
            formats: {
                1: "DVD",
                2: "88T",
                3: "LPR"
            },
            gold: false
        },
    };
    return myMusic;
  }
  
  console.log(myFunction()[2]);
  
  myFunction()[2];
  module.exports = myFunction;

