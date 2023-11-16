/*Define a class Song, which holds the following information about songs: typeList, name, and time.

You will receive the input as an array.

The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".

Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of the last element is "all", print the names of all the songs */

function solve(arr){
  class Song{
    constructor(typeList, name, time){
      this.typeList = typeList;
      this.name = name;
      this.time = time; 
    }

    play(){
      console.log(this.name);
    }

    check(keyword){
      if(this.typeList == keyword){
        console.log(this.name);
      }
    }
  }

  var n = arr.shift();
  var keyword = arr.pop();

  for(let i = 0; i <= arr.length - 1; i++){
    var tokens = arr[i].split("_");
    var typeList = tokens[0];
    var name = tokens[1];
    var time = tokens[2];
    let song = new Song(typeList, name, time);
    
    if(keyword == "all"){
      song.play();
    }
    else{
      song.check(keyword);
    }
  }
}
solve([2,

  'like_Replay_3:15',
  
  'ban_Photoshop_3:48',
  
  'all']);
