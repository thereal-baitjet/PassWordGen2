// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var numList = "1234567890";
var specialList = "~!@#$%^&*()_+{}|:<>?[];\",'/";
var totalTypes = "";
var upperCaseConfirm = false;
var lowerCaseConfirm =  false;
var numListConfirm = false;
var result = "";
var specialListConfirm = false;
var userSize = 0;

function generatePassword(promptUser)  {

//this function prompts the user and sets the varialbles baased on user input

function promptUser() {

var userInput = prompt("Enter a value between 8 - 128");
userSize = parseInt(userInput);
if (userSize < 8 || userSize > 128 || isNaN(userSize)) {  
  alert("hey, hey, hey enter the right value! I repeat from 8 - 128")
  promptUser()

}
numListConfirm = confirm("Would you like numbers?");
lowerCaseConfirm = confirm("would you like your password to contain lower case letters?");
upperCaseConfirm = confirm("would you like your password to contain Upper case letters?");
specialListConfirm = confirm("Would you like special characters?");
return

} 

if (numListConfirm) {
totalTypes = numList + totalTypes;
 }

if (lowerCaseConfirm) {
totalTypes  = lowerlCaselist + totalTypes;
}

if (upperCaseConfirm) {
totalTypes = upperCaseList + totalTypes;
}

if (specialListConfirm) {
totalTypes = specialList + totalTypes;

}
totalTypes
}