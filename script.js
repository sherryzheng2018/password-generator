// Assignment Code
var generateBtn = document.querySelector("#generate");
//4 arrays 
var numerList = ['1','2','3','4','5','6','7','8','9','0'];
var lowercasaeList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharators = ['\>','\*','\@','\!','\$','\^','\?','\%','\#'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  //track number of attemps in case of invalid input
  var attempCount = 0;
  //prompt for required password length
  var lengthInput = prompt("How many charactors do you want in the password?");   
  var passwordLength = parseInt(lengthInput);

  //ask user to choose again if input invalid
  while(!lengthInput || passwordLength > 128 || passwordLength < 8){
    attempCount++;
    if(attempCount > 2) {
      alert("Too many attemps, good bye");
      return "password generation failed";
    }
    alert("Please enter min 8 or max 128 charcters "); 
    lengthInput = prompt("How many charactors do you want in the password?"); 
    passwordLength = parseInt(lengthInput); //finalize password length
  } 

    //prompt for types of character needed for password
    var lowercase = confirm("Do you want to include lowercase?");
    var uppercase = confirm("Do you want to include uppercase?");
    var numeric = confirm("Do you want to include numbers?");
    var specialCha = confirm("Do you want to include special charactors?"); 
    /* console.log("Include lowercase", lowercase);  */
    // console.log("Include uppercase", uppercase); 
    // console.log("Include numbers", numeric); 
    // console.log("Include special charactors", specialCha);

    //verify requirement prompt result, ask again if none chosen
    while (!lowercase&&!uppercase&&!specialCha&&!specialCha) {
      console.log(123);
      attempCount++;
      if(attempCount > 2) {
        alert("Too many attemps, good bye");
        return "password generation failed";
      }

      alert("You should at least pick ONE type. Please select again!");
      lowercase = confirm("Do you want to include lowercase?");
      uppercase = confirm("Do you want to include uppercase?");
      numeric = confirm("Do you want to include numbers?");
      specialCha = confirm("Do you want to include special charactors?"); 
      // console.log(lowercase);
      // console.log(uppercase);
      // console.log(numeric);
      // console.log(specialCha);
    }
    
    //define a holding array to hold needed characters
    var holdingArray = [];

    //build holding array
    if (lowercase) {
    holdingArray = holdingArray.concat(lowercasaeList);
    }
    
    if (uppercase) {
    holdingArray = holdingArray.concat(uppercaseList);
    }
    
    if (numeric) {
    holdingArray = holdingArray.concat(numerList);
    }
    
    if (specialCha) {
    holdingArray = holdingArray.concat(specialCharators);
    }
    //verify holding array
    //console.log(holdingArray);

    //define return password
    var returnPass = "";
    
    //loop based on user provided password length
    for (let i = 0; i < passwordLength; i++) {
      //algorithm to calculate a random index for holding array
      var x = Math.floor(Math.random() * holdingArray.length);
      returnPass = returnPass.concat(holdingArray[x]); 
    }
    //return result;
    return returnPass;
}



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//TODO: write the generatePassword function
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//TODO: ask the user how many charactors they want  in the password -> use a prompt which will be set to a var -> console.log(passwordlength) -> make sure the information is correct -> number -> 8+ or 128-
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//TODO: write a series of 4 confirms -> set these to be a var -> to check if the user wants -> clo each variable from confirm
//TODO: write 4 arrays one for lowercase, one upper, number, and special
//TODO: check that the prompts true or false -> using above var for this -> add associated arrays to a "holding array" upperConfirm -> true -> uppercase[] -> add to holding[] clo this
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//TODO: check that we have at least one of the types
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//TODO: take our holding array and randomize these values -> adding to a secondary array clo this randomized array to make sure this is correct
//TODO: take the randomized characters and select the amount that the user has chosen for the password lenght -> add these to a "return array" -> for loop the lengh for this will be the user passward length clo this 3rd array to make sure that its the right length
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//TODO: take our return array and use array methods to convert to a string -> have a var for this and return string clo tho
