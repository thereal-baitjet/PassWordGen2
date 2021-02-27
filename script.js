
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var numList = "1234567890";
var specialList = "~!@#$%^&*()_+{}|:<>?[];\",'/";
var charsConfirmed = "";
var upperCaseConfirm = false;
var lowerCaseConfirm =  false;
var numListConfirm = false;
var specialListConfirm = false;

function generatePassword()  {

var passwordResult = "";
var passwordLength = 0;

//this function prompts the user and sets the varialbles baased on user input


var passwordLength = prompt("Enter a value between 8 - 128");
passwordLength = parseInt(passwordLength);
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {  
 return alert("hey, hey, hey enter the right value! I repeat from 8 - 128")
 
} 

numListConfirm = confirm("Would you like numbers?");
lowerCaseConfirm = confirm("would you like your password to contain lower case letters?");
upperCaseConfirm = confirm("would you like your password to contain Upper case letters?");
specialListConfirm = confirm("Would you like special characters?");


if (numListConfirm) {
charsConfirmed += numList;
 }

if (lowerCaseConfirm) {
charsConfirmed  += lowerCaseList;
}

if (upperCaseConfirm) {
charsConfirmed += upperCaseList;
}

if (specialListConfirm) {
charsConfirmed += specialList;

}
else {
  if(charsConfirmed < 1){
   alert("You must choose at least one option of character");
  }
};

console.log(charsConfirmed)

var possibleCharArray = charsConfirmed.split('');

console.log(possibleCharArray)


var passwordResult = "";

for (let i = 0; i <= passwordLength; i++) {
  var item = possibleCharArray[Math.floor(Math.random() * possibleCharArray.length)];
  passwordResult += item

}

console.log(passwordResult)

   var passwordText = document.querySelector("#password");

  passwordText.value = passwordResult;
}


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", generatePassword);


