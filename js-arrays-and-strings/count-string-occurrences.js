function solve(sentence, word){
    let arr = sentence.split(' ');
    var counter = 0;

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] === word){
            counter++;
        }
    }

    console.log(counter);
}
solve('This is a word and it also is a sentence',
'is');
