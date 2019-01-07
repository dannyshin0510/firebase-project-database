
var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;
  score = 0;
  

  var config = {
    apiKey: "AIzaSyB4buf1HovVJWmzvKIcDvMnh5dfrifDc-k",
    authDomain: "workout-1212e.firebaseapp.com",
    databaseURL: "https://workout-1212e.firebaseio.com",
    projectId: "workout-1212e",
    storageBucket: "workout-1212e.appspot.com",
    messagingSenderId: "466304417497"
  };
  firebase.initializeApp(config);
  database = firebase.database();
 

  var ref = database.ref('Saturday');
  var Monday ={
    workout:["Jumping Jacks", "High knees", "Should press"],
    goal:"To complete 30 high knees in 15 seconds"
  }
  // ref.push(Monday);


  //pulling data
  ref.on('value', gotData, err);

  function gotData(data) {
    console.log(data.val());
    var scores = data.val();
    var keys = Object.keys(scores);

    
    //testing conditional statements with the data read from the firebase datastorage.
    var number=data.val()[keys[0]]["numberPlay"];
    if (number===12)
      console.log("The number is the same");


    console.log(data.val()[keys[0]]["goal"]);
    $('#words').append(data.val()[keys[0]]["goal"]);
  }



  function err(err){
    console.log("error!"+err);
  }

$(document).ready(function(){
  $("#goalButton").click(function(){
        console.log("HELLO");
        var ref = database.ref('Just added!');
        var Monday ={
        workout:["Jumping Jacks", "High knees", "Should press"],
        goal:"To complete 30 high knees in 15 seconds"
      }
    ref.push(Monday);
  }); 
}); 
  

// function send ()
// {
  
// }