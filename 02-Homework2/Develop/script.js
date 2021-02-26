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
var upperCaseConfirm = "";
var lowerCaseConfirm = "";
var numListConfirm = "";
var typeIndex = "";
var typeAdder = "";
var finalPassword = "";
var specialListConfirm = "";

function generatePassword()  {

function generate() {

var userInput = prompt("Enter a value between 8 - 128");
var userSize = parseInt(userInput);
var numListConfirm = confirm("Would you like yonumbers?");
var lowerCaseConfirm = confirm("would you like your password to contain lower case letters?");
var upperCaseConfirm = confirm("would you like your password to contain Upper case letters?");
var specialListConfirm = confirm("Would you like special characters?");

  
if (userSize < 8 || userSize > 128 || isNaN(userSize)) {  
alert("hey, hey, hey enter the right value! I repeat from 8 - 128")
return;

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

typeAdder = totalTypes.lenght

