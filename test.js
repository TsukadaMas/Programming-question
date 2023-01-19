
var input = [ ["L4", "123 kings road" , 2022], [ "L1", "123 kings road" , 2020], ["L2" , "20 queen road" ,1990 ], ["L3", "20 queen road" , 1992] ];


function ReturnMostRecent(input){
    var mostrecent = [];
    for(var record in input){
      if(mostrecent.some(address => address.includes(input[record][1]))){
        var mostRecentRecord = FindAddress(mostrecent, input[record]);
        if(mostrecent[mostRecentRecord][2] <  input[record][2]){
            mostrecent[mostRecentRecord] = input[record];
        }
      }else{
        mostrecent.push(input[record]);
      }
    }
    return mostrecent;
} 


console.log(ReturnMostRecent(input));

function FindAddress(mostrecent, record){
    for(var i=0; i<mostrecent.length; i++){
        if(mostrecent[i][1] == record[1]){
            return i;
        }
    }
}