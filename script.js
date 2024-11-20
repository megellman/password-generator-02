// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // characters

  var letterChar = 'abcdefghijklmnopqrstuvwxyz';
  var numChar = '123456789';
  var specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

  var password = '';

  var length = prompt('Select your password length. It must be between 8 and 128 characters.', 8);
  // ensures length is within correct range
  if(length < 8 || length > 128){
    length = Math.floor(Math.random() * (128 - 8 - 1) + 8);
    alert('Invalid selection. Your password length will be ' + length);
  }
  var lowerCase = confirm('Will this password include lowercase letters?', true);
  var upperCase = confirm('Will this password include uppercase letter?', true);
  var numeric = confirm('Will this password include numerics?', true);
  var special = confirm('Will this password include special characters?', true);

  do {
    if(lowerCase){
      password += letterChar.charAt(Math.floor(Math.random() * (letterChar.length - 0) - 0 + 1) + 0);
      if(password.length == length) {
        console.log('break')
        break;
      }
    }
    if(upperCase){
      password += letterChar.charAt(Math.floor(Math.random() * (letterChar.length - 0) - 0 + 1) + 0).toUpperCase();
      if(password.length == length) {
        console.log('break')
        break;
      }
    }
    if(numeric){
      password += numChar.charAt(Math.floor(Math.random() * (numChar.length - 0) - 0 + 1) + 0);
      if(password.length == length) {
        console.log('break')
        break;
      }
    }
    if(special){
      password += specialChar.charAt(Math.floor(Math.random() * (specialChar.length - 0) - 0 + 1) + 0);
      if(password.length == length) {
        console.log('break')
        break;
      }
    }
  } while (password.length < length);

  var newPass = randomize(password);
  console.log(password)
  console.log('password: ' + newPass + ' password length: ' + newPass.length);
  return newPass
}

function randomize(string){
  var word = string.split('');

  for(var i = word.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = word[i];
    word[i] = word[j];
    word[j] = temp;
}
return word.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

