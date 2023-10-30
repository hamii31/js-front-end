function solve(count, group, day){
   var total = 0;
   switch(group){
    case "Students":
        switch(day){
            case "Friday":
                total = count * 8.45;
                if(count >= 30){
                    var x = (15/100) * total;
                    total -= x;
                }
            break;
            case "Saturday":
                total = count * 9.80;
                if(count >= 30){
                    var x = (15/100) * total;
                    total -= x;
                }
            break;
            case "Sunday":
               total = count * 10.46;
                if(count >= 30){
                    var x = (15/100) * total;
                    total -= x;
                }
            break;
        }
    break;
    case "Business":
        switch(day){
            case "Friday":
                total = count * 10.90;
                if(count >= 100){
                    var x = 10 * 10.90;
                    total -= x;
                }
            break;
            case "Saturday":
                total = count * 15.60;
                if(count >= 100){
                    var x = 10 * 15.60;
                    total -= x;
                }
            break;
            case "Sunday":
                total = count * 16;
                if(count >= 100){
                    var x = 10 * 16;
                    total -= x;
                }
            break;
        }
    break;
    case "Regular":
        switch(day){
            case "Friday":
                total = count * 15;
                if(count >= 10 && count <= 20){
                    var x = (5/100) * total;
                    total -= x;
                }
            break;
            case "Saturday":
                total = count * 20;
                if(count >= 10 && count <= 20){
                    var x = (5/100) * total;
                    total -= x;
                }
            break;
            case "Sunday":
                total = count * 22.50;
                if(count >= 10 && count <= 20){
                    var x = (5/100) * total;
                    total -= x;
                }
            break;
        }
    break;
   }
   console.log("Total price: " + total.toFixed(2));
}
solve(40, "Regular", "Saturday");
