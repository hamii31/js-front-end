function solve(arr, rotations){
   let x = 0;
   for(let i = 0; i < rotations; i++){
     x = arr.shift(); 
     arr.push(x);
   }
   console.log(arr);
}
solve([51, 47, 32, 61, 21], 2);
