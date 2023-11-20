/*Write a function that:

· Records a car number for every car that enters the parking lot

· Removes a car number when the car goes out

· Input will be an array of strings in format [direction, carNumber]

Print the output with all car numbers which are in the parking lot sorted in ascending by number.

If the parking lot is empty, print: "Parking Lot is Empty". */

function solve(arr){
  var car = {};
  for(let i = 0; i <= arr.length - 1; i++){
    var tokens = arr[i].split(", ");
    var key = tokens[1];
    var value = tokens[0];
    car[key] = value;
  }

  let entries = Object.entries(car);
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  var counter = 0;
  for(let [key, value] of entries){
    if(value == "IN"){
      console.log(key);
    }
    else{
      counter++
    }
  }

  if(counter == entries.length){
    console.log("Parking Lot is Empty");
  }
}
solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
