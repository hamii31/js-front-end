/*Write a function that receives array of strings in the following format '{cat name} {age}'.

Create a Cat class that receives in the constructor the name and the age parsed from the input

It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.

For each of the strings provided, you must create a cat object and invoke the .meow () method.*/

function solve(arr){
  class Cat{
    constructor(name, age){
      this.name = name;
      this.age = age; 
    }

    meow(){
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for(let i = 0; i <= arr.length - 1; i++){
    var tokens = arr[i].split(' ');
    var catName = tokens[0];
    var age = tokens[1];
    let cat = new Cat(catName, age);
    cat.meow();
  }
}
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
