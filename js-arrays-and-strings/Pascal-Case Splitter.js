function solve(text){
    
    //This string is written in PascalCase format. 
    //Your task here is to split this string by every word in it.
    //Print them joined by comma and space

    var sentenceArr = text.split(/(?=[A-Z])/);

    var res = "";

    for(let i = 0; i <= sentenceArr.length - 1; i++){
       if(i == sentenceArr.length - 1){
         res += sentenceArr[i];
       }
       else{
        res += sentenceArr[i] + ", ";
       }
    }

    console.log(res);
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
