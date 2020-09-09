// Assignment Code
var generateBtn = document.querySelector("#generate");

var numArray = [];
var specialArray = [];
var upperArray = [];
var lowerArray = [];
var used = [];


function generatePassword(){
  var pLength = prompt("How many characters do you want your password to be");
    if (pLength <7 || pLength > 128){
    }
    
    else {
      alert("Sorry, the password length must be between 8 and 128")
    }

      var specChar = confirm("Do you want to use special characters?")
      var caps = confirm("Do you want to use uppercase letters?")
      var lower = confirm("Do you want to use lower case letters?")
      var num = confirm("Do you want to use numbers?");













  return "end password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


