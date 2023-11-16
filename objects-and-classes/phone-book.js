/*Write a function that stores information about a person’s name 
and phone number. The input is an array of strings with 
space-separated name and number. Replace duplicate name */

function solve(arr){
  let assocArr = {};
  for(let i = 0; i <= arr.length - 1; i++){
    var tokens = arr[i].split(' ');
    var name = tokens[0];
    var phone = tokens[1];
    assocArr[name] = phone;
  }
  for(let key in assocArr) {
    console.log(key + " -> " + assocArr[key]);
    }
}
solve(['George 0552554',

'Peter 087587',

'George 0453112',

'Bill 0845344']);
