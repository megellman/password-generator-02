// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // characters
  var letterChar = 'abcdefghijklmnopqrstuvwxyz';
  var numChar = '123456789';
  var specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

  var password = '';
  
  var length = prompt('Select your password length. It must be between 8 and 128 characters.', 8);
  var lowerCase = prompt('Will this password include lowercase letters?', true);
  if(lowerCase){
    // selects random number between the length selected and 8 (min amount allowed)
    // minus 3 to make sure there's enough left for upper, numeric, and special 
   var randomNum = Math.floor(Math.random() *((length - 3) - 8 + 1)) + 8;
   var i = 0;
    do{
      i = i + 1;
      password += letterChar.charAt(Math.floor(Math.random()*(25 - 0) - 0 + 1) + 0);
      } while (i < randomNum);
    length = length - randomNum;
    console.log(`lowercase: ${password}`)
  }
  var upperCase = prompt('Will this password include uppercase letter?', true);
  if(upperCase){
   var randomNum = Math.floor(Math.random() *((length - 2) - 8 + 1)) + 8;
   var i = 0;
    do{
      i = i + 1;
      password += letterChar.charAt(Math.floor(Math.random()*(25 - 0) - 0 + 1) + 0).toUpperCase();
      } while (i < randomNum);
      length = length - randomNum;
      console.log(`uppercase: ${password}`)
  }
  var numeric = prompt('Will this password include numerics?', true);
  if(numeric){
    var randomNum = Math.floor(Math.random() *((length - 1) - 8 + 1)) + 8;
    var i = 0;
     do{
       i = i + 1;
       password += numChar.charAt(Math.floor(Math.random()*(8 - 0) - 0 + 1) + 0);
       } while (i < randomNum);
       length = length - randomNum;
       console.log(`numeric: ${password}`)
   }
  var special = prompt('Will this password include special characters?', true);
  if(upperCase){
    var i = 0;
     do{
       i = i + 1;
       password += specialChar.charAt(Math.floor(Math.random()*(32 - 0) - 0 + 1) + 0).toUpperCase();
       } while (i < length);
   }
   console.log(`special: ${password}`)
   
   var array = password.split(''); 

   for (var i = array.length - 1; i > 0; i--) { 
      var j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; 
    }
    password = array.join(''); 
    
  console.log(password);
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

