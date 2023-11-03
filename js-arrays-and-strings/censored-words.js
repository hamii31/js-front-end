function solve(sentence, word){
    let stars = "";
    var wordLen = word.length;

    for(i = 0; i < wordLen; i++){
        stars += "*";
    }

   let result = sentence.replace(word, stars);

    console.log(result)
}
solve('Find the hidden word', 'hidden');
