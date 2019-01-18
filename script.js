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
  ref.on('value', gotData, err);

  function gotData(data) {
    console.log(data.val());
    var scores = data.val();
    var keys = Object.keys(scores);
  }
  function err(err){
    console.log("error!"+err);
  }
// adds new elements to the firebase portal
$(document).ready(function(){
  $("#setButton").click(function(){
        var ref = database.ref('Just added!');
        encrypt("password123");
    ref.push(Monday);
  }); 
}); 


encrypt("password123");
function encrypt(inputtedPassword)
{
  var rawPassword=inputtedPassword;
  var codedPassword;
  // first letter
  var asciiNum=rawPassword.charCodeAt(0);
  var newAscii=asciiNum+3;
  codedPassword=String.fromCharCode(newAscii);
  // remaining letters
  for (var num=1;num<rawPassword.length;num++)
  {
    var asciiNum=rawPassword.charCodeAt(num);
    var newAscii=asciiNum+3;
    codedPassword=codedPassword+String.fromCharCode(newAscii);
  }
  console.log(codedPassword);
}