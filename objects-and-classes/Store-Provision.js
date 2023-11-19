function solve(stock, ordered){

  let assocArr = {};
  
  assocArr = seed(assocArr, stock);
  assocArr = seed(assocArr, ordered);
  
  for(let key in assocArr) {
    console.log(key + " -> " + assocArr[key]);
  }

  function seed(assocArr, arr){

    let object = {};
    var count = 0;

    for(let i = 0; i <= arr.length - 1; i++){
      if(i % 2 == 0){
        object.name = arr[i];
        count++;
      }
      else{
        object.quantity = arr[i];
        count++;
      }
      
      if(count == 2){
        count = 0;
        var name = object.name;
        var quantity = parseInt(object.quantity);
        
        if(assocArr.hasOwnProperty(name)){
          assocArr[name] += quantity;
        }
        else{
          assocArr[name] = quantity;
        }
      }
    }

    return assocArr;
  }
}
solve([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);
