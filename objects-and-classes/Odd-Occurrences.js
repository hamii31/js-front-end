function solve(string){
  string = string.toLowerCase();
  var tokens = string.split(" ");
  var res = " ";
  let words = {};

  for (const num of tokens) {
    words[num] = words[num] ? words[num] + 1 : 1;
  }

  for(let key in words){
    if(words[key] % 2 != 0){
      res += key + " ";
    }
  }
  console.log(res);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#' );
