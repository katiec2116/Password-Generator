// Assignment Code
var generateBtn = document.querySelector("#generate");


// arrays to hold characters to make up password
var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", '"'];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  // clear out array to add password characters into
  var usedArr = [];
  // chosen length of user password
  var pLength = prompt("How many characters do you want your password to be?");
  // loop to continuously prompt user for length until condition is met
  while (pLength < 7 || pLength > 128) {
    alert("Sorry, the password length must be between 8 and 128 characters.");
    // re-prompt the user
    var pLength = prompt("How many characters do you want your password to be?");
  }
  if (pLength > 7 && pLength < 129) {

    // user choosing what characters make up their password
    var specChar = confirm("Do you want to use special characters?");
    if (specChar) {
      usedArr.push(...specialArr);
      console.log(usedArr);
    }

    var upper = confirm("Do you want to use upper case letters?");
    if (upper) {
      usedArr.push(...upperArr);
      console.log(usedArr);
    }

    var lower = confirm("Do you want to use lower case letters?");
    if (lower) {
      usedArr.push(...lowerArr);
      console.log(usedArr);
    }

    var num = confirm("Do you want to use numbers?");
    if (num) {
      usedArr.push(...numArr);
      console.log(usedArr);
    }

    // empty array to hold randomly chosen characters
    var password = [];
    
    // randomly choosing characters from combined array until specified length is met
    for (var p = 0; p < pLength; p++) {
      password.push(usedArr[Math.floor(Math.random() * usedArr.length)]);
    }
    // check if any values were selected
    if (usedArr.length < 1) {
      alert("Sorry, can't create a password with no chosen characters, please restart.")
    }


    // converting characters to one string without commas
    return password.join("")
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

