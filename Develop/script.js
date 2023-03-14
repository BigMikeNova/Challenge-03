// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var lower;
var upper;
var special;
var choices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankupper = [];
var toupper = function (x) {
  return x.toupperCase();
};
upperCase = lowerCase.map(toupper);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "*", "/", " < ", " > ", " ? ", "@", "_", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  length = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + length);
  if(!length) {
    alert("Required value");
  } else if (length < 8 || length > 128) {
    length = prompt("You must choose between 8 and 128");
    console.log("Password length " + length);  
  } else { 
    lower = confirm("Need lower case letters?");
    console.log("lower case " + lower);
    upper = confirm("Need upper case letters?");
    console.log("upper case " + upper);
    Number = confirm("Need numbers?");
    console.log("Number " + Number);
    special = confirm("Need special characters?");
    console.log("special Character " + special);
  };
  if (!lower && !upper && !Number && !special) {
    choices = alert("Gotta pick something :)");
  } else if (lower && upper && Number && special) {
    choices = lowerCase.concat(upperCase, numbers, special);
    console.log(choices);
  }
  else if (lower && upper && Number) {
    choices = lowerCase.concat(upperCase, numbers);
    console.log(choices);
  }
  else if (lower && upper && special) {
    choices = lowerCase.concat(upperCase, special);
    console.log(choices);
  }
  else if (lower && Number && special) {
    choices = lowerCase.concat(numbers, special);
    console.log(choices);
  }
  else if (upper && Number && special) {
    choices = upperCase.concat(numbers, special);
    console.log(choices);
  }
  else if (lower && upper) {
    choices = lowerCase.concat(upperCase);
    console.log(choices);
  }
  else if (lower && Number) {
    choices = lowerCase.concat(numbers);
    console.log(choices);
  }
  else if (lower && special) {
    choices = lowerCase.concat(special);
    console.log(choices);
  }
  else if (upper && Number) {
    choices = upperCase.concat(numbers);
    console.log(choices);
  }
  else if (upper && special) {
    choices = upperCase.concat(special);
    console.log(choices);
  }
  else if (Number && special) {
    choices = numbers.concat(special);
    console.log(choices);
  }
  else if (lower) {
    choices = lowerCase;
    console.log(choices);
  }
  else if (upper) {
    choices = blankupper.concat(upperCase);
    console.log(choices);
  }
  else if (Number) {
    choices = numbers;
    console.log(choices);
  }
  else if (special) {
    choices = special;
    console.log(choices);
  };

  var passwordBlank = [];
  
  for (var i = 0; i < length; i++) {
    var allchoices = choices[Math.floor(Math.random() * choices.length)];
    passwordBlank.push(allchoices);
    console.log(allchoices);
  }

  var password = passwordBlank.join("");
  console.log("Here's your Password: " + password);
  return password;
  
}