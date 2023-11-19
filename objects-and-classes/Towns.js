function solve(arr){
  var town = "";
  var latitude = 0;
  var longtitude = 0;

  for(let i = 0; i <= arr.length - 1; i++){
    var tokens = arr[i].split(" | ");
    var town = tokens[0];
    var latitude = parseFloat(tokens[1]).toFixed(2);
    var longitude = parseFloat(tokens[2]).toFixed(2);

    let towns = {town:town, latitude:latitude, longitude:longitude};
    console.log(towns);
  }

}
solve(['Plovdiv | 136.45 | 812.575'] );
