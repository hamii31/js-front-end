function solve(arr, steps){
  var counter = 0;
  var res = [];
   for(let i = 0; i <= arr.length - 1; i++){
    if(counter === steps || counter == 0){
      res.push(arr[i]);
      counter = 0;
    }
    counter++;
   }
   return res;
}
var res = solve(['5','20','31','4','20'],2 );
console.log(res);

