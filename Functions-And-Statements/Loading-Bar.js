/*Your task is to create a function that visualizes a loading bar 
depending on the number you have received in the input. */

function solve(percentage){
  var bar = "[..........]";
  var barArr = bar.split('');
  bar = "";

  var n = 0;

  if(percentage != 0){
    n = percentage/10;
  }

  for(let i = 0; i <= n; i++){

    if(barArr[i] === '.'){
      barArr[i] = '%';
    }
  }
  for(let i = 0; i <= barArr.length-1; i++){
    bar += barArr[i];
  }

  if(percentage < 100){
    console.log(percentage +"% " + bar);
    console.log("Still loading...");
  }
  else{
    console.log(percentage +"% Complete!");
    console.log(bar);
  }
}
solve(70);
