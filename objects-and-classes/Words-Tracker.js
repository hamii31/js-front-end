function solve(arr){
  var keywords = arr[0];
  var tokens = keywords.split(" ");
  let assocArr = {};

  for(let r = 0; r<=tokens.length-1;r++){
    assocArr[tokens[r]] = "";
  }

  for(let i = 0; i<=tokens.length-1; i++){
    var count = 0;
    for(let r = 1; r<=arr.length;r++){
      if(arr[r] == tokens[i]){
        count++;
        assocArr[tokens[i]] = count; 
      }
    }
  }

  let entries = Object.entries(assocArr);

  entries.sort(function(a, b) {
    return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0}); //sorts the assoc array by its values

  for(let [key, value] of entries){
    console.log(key + " - " + value);
  }
}
solve([

  'is the',
  
  'first', 'sentence', 'Here', 'is',
  
  'another', 'the', 'And', 'finally', 'the',
  
  'the', 'sentence']);
