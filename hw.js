const hW = require ('./index.js');
var count =index.length;
function toppingTypes(){
  var toppingT =[];
  for (let i=0; i<count ;i++){
    for (let j=0; j<index[i].topping.length ;j++){
      toppingT+=index[i].topping[j].type;
  }
}
return toppingT;}

function battertTypes(){
  var battertT =[];
  for (let i=0; i<count ;i++){
    for (let j=0; j<index[i].batterts.battert.length ;j++){
      batterT+=index[i].batterts.batter[j].type;
  }
}
return batterT;}

function ppuAvg() {

  var avg=ppusum/count;
  return avg;
}


function ppsum(){
  var sum=0;
  for(let i=0 ; i<index.length;i++){
     sum+=index[i].ppu;
  }
  return sum;
}

function theIDs(){
  var iDs=[];
  for (let i=0; i<count ;i++){
    iDs[index+1]=index[i].id;
    for (let j=0; j<index[i].topping.length ;j++){
       iDs[index+1]=index[i].topping[j].id;
      for (let k=0; k<index[i].batterts.batter.length ;k++){
       iDs[index+1]=index[i].batterts.batter[k].id;}
    }
  }
  return iDs;
}
console.log("THE topping types");
console.log(toppingTypes());
console.log("THE BETTER types");
console.log(batterTypes());
console.log("THE PPU SUM");
console.log(ppusum());
console.log("THE PPU AVERAGE");
console.log(ppuAvg());
console.log("THE mentioned IDs regardless to the type");
console.log( theIDs());