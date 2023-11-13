/* Write a function that checks if a given password is valid. Password validations are:

· The length should be 6 - 10 characters (inclusive)

· It should consist only of letters and digits

· It should have at least 2 digits  */

function solve(pass){
  var errorCount = 0;

  if(pass.length < 6 || pass.length > 10){
    console.log("Password must be between 6 and 10 characters");
    errorCount++;
  }

  if(pass.match(/[|\\/~^:,;?!&%$@*+]/)){
    console.log("Password must consist only of letters and digits");
    errorCount++;
  }

  if(!checkForLetters(pass)){
    console.log("Password must consist only of letters and digits");
    errorCount++;
  }

  if(!checkForDigits(pass)){
    console.log("Password must have at least 2 digits");
    errorCount++;
  }

  if(errorCount == 0){
    console.log("Password is valid");
  }

  function checkForLetters(pass){
    var splitted = pass.split('');
    var count = 0;

    for(let i = 0; i <= splitted.length - 1; i++){
      if(!isNaN(splitted[i])){
        count++;
      }
    }

    if(count == pass.length){
      return false;
    }

    return true;

  }

  function checkForDigits(pass){
    var splitted = pass.split('');
    var count = 0;

    for(let i = 0; i <= splitted.length - 1; i++){
      if(!isNaN(splitted[i])){
        count++;
      }
    }

    if(count >= 2){
      return true;
    }

    return false;

  }

}
solve('123456');
