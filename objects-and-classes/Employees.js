function solve(arr){
  var number = 0;
  var assocArr = {};
  for(let i = 0; i <= arr.length - 1; i++){
    number = arr[i].length;
    var name = arr[i];
    assocArr[name] = number;
  }
  let entries = Object.entries(assocArr);

  for(let [key, value] of entries){
    console.log("Name: " + key + " -- Personal Number: " + value);
  }
}
solve([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
  ]);
