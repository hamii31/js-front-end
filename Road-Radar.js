function solve(speed, zone){
    var diff = 0;

    switch(zone){
        case 'motorway':
            var speedLimit = 130;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }
            else{
                diff = speed - speedLimit;
    
                if(diff <= 20){
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }
                else if(diff <= 40){
                    console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                }
                else{
                    console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
        break;
        case 'interstate':
            var speedLimit = 90;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }
            else{
                diff = speed - speedLimit;
    
                if(diff <= 20){
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }
                else if(diff <= 40){
                    console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                }
                else{
                    console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
        break;
        case 'city':
            var speedLimit = 50;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }
            else{
                diff = speed - 50;

                if(diff <= 20){
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }
                else if(diff <= 40){
                    console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                }
                else{
                    console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
        break;
        case 'residential':
                var speedLimit = 20;
                if(speed <= speedLimit){
                    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
                }
                else{
                    diff = speed - speedLimit;
    
                    if(diff <= 20){
                        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                    }
                    else if(diff <= 40){
                        console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                    }
                    else{
                        console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                    }
                }
        break;
    }
}
solve(200, 'motorway');
