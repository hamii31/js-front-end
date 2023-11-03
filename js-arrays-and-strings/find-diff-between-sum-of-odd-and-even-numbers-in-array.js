function solve(arr){
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] % 2 == 0){
           evenSum += arr[i];
        }
        else{
            oddSum += arr[i];
        }
    }

    console.log(Math.abs(evenSum - oddSum));
}
solve(arr = [2,4,6,8,10]);
