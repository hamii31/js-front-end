function solve(string){
    
    //Find all special words starting with #. 
    //If the found special word does not consist only of letters, 
    //then it is invalid and should not be printed. 

    var sentenceArr = string.split(" ");

    for(let i = 0; i <= sentenceArr.length - 1; i++){
        if(sentenceArr[i].includes("#") && sentenceArr[i].length > 1){
            console.log(sentenceArr[i].replace('#', ''));
        }
    }
}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
