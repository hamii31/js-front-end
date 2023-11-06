// Exercise: Reveal Words
//Write a function, which receives two parameters.
//The first parameter will be a string with some words separated by ', '.
//The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace i

function solve(words, arr){

  var res = "";

  var wordArr = words.split(", ");

  var sentenceArr = arr.split(" ");

  for(let i = 0; i <= wordArr.length - 1; i++){

    var x = wordArr[i];

    for(let n = 0; n <= sentenceArr.length - 1; n++){

      var y = sentenceArr[n];
      
      if(y.includes("*") && y.length == x.length){
        
        sentenceArr[n] = x;
      }
    }
  }

  res += sentenceArr.join(" ");
  console.log(res);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages');

