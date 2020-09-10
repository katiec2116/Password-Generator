// Assignment Code
var generateBtn = document.querySelector("#generate");


// arrays to hold characters to make up password
var numArr = ["1","2","3","4","5","6","7","8","9","0"];
var specialArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usedArr=[];

function generatePassword() {
  var pLength = prompt("How many characters do you want your password to be?");

  var specChar = confirm("Do you want to use special characters?");

  var upper = confirm("Do you want to use uppercase letters?");

  var lower = confirm("Do you want to use lower case letters?");
  
  var num = confirm("Do you want to use numbers?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
