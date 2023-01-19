
var input = [ ["L4", "123 kings road" , 2022], [ "L1", "123 kings road" , 2020], ["L2" , "20 queen road" ,1990 ], ["L3", "20 queen road" , 1992] ];


function returnMostRecent(input){
    var mostrecent = [0,0,0];
    for(var address in input){
        if(input[address][2] >= mostrecent[2]){
            mostrecent = input[address];
        }
    }
    return mostrecent;
} 


console.log(returnMostRecent(input));