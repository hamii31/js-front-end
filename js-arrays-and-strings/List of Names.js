function solve(arr){
  arr.sort();
  for(let i = 0; i <= arr.length - 1; i++){
    console.log((i + 1) + "." + arr[i]);
  }
}
solve(["John", "Bob", "Christina", "Ema"]);

