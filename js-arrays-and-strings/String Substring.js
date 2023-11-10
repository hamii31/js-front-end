function solve(word, text){
    
    //Write a function that checks given text for containing a given word. 
    //The comparison should be case insensitive. 
    //Once you find a match, print the word and stop the program

    var sentenceArr = text.split(" ");

    var count = 0;

    for(let i = 0; i <= sentenceArr.length - 1; i++){
        if(sentenceArr[i].toLowerCase() === word){
            console.log(word);
            count++;
            break;
        }
    }
    if(count == 0){
        console.log(word + " not found!")
    }
}
solve('python',
'JavaScript is the best programming language' );
