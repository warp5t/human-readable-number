module.exports = function toReadable (number) {
let arrReadNumb = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
arrReadNumb[20] ='twenty';
arrReadNumb[30] ='thirty';
arrReadNumb[40] ='forty';
arrReadNumb[50] ='fifty';
arrReadNumb[60] ='sixty';
arrReadNumb[70] ='seventy';
arrReadNumb[80] ='eighty';
arrReadNumb[90] ='ninety';

let readNumb;
let index;

number = String(number); 
//console.log('check number: ', number);

if (number.length === 3) {
  for(let i = 0; number[0] >= i ; i++) {
      index = i;
    }
    readNumb = arrReadNumb[index] + ' hundred';
    
     if (number[1] == 0 && number[2] == 0) {   
      return readNumb;     
      //console.log (readNumb);
        }

    else if (number[1] == 1) {
      for (let i = 0; number[2] >= i; i++) {
        index = i;
      }
      index = index + 10;
      readNumb = readNumb + ' ' + arrReadNumb[index];
    }
    else if (number[1] > 1){
      if (number[2] == 0 ) {                                 ///////////////////////////////////////////////////////////////////////
        for(let i = 0; number[1] >= i; i++) {
          index = i;
        }
        index = index * 10;
        readNumb = readNumb + ' ' + arrReadNumb[index]; 
      }
      
      else if (number[2] > 0) {
        for(let i = 0; number[1] >= i; i++) {
        index = i;
      }
      index = index * 10;
      readNumb = readNumb + ' ' + arrReadNumb[index];
      
      for (let i = 0; number[2] >= i; i++){
        index = i;
      }
      readNumb = readNumb + ' ' + arrReadNumb[index];
      //console.log (readNumb);
      return readNumb;
      }
      

    }
    else if (number[1] == 0) {
      for (let i = 0; number[2] >= i; i++) {
        index = i;
      }
      readNumb = readNumb + ' ' + arrReadNumb[index];
    }
     //console.log(readNumb);
     return (readNumb);
}
else if (number.length === 2) {
  if (number[0] == 1) {
    for (let i = 0; number[1] >= i; i++) {
      index = i;
    }
    index = index + 10;
    readNumb = arrReadNumb[index];
  }
  else if (number[0] > 1){
    if (number[1] == 0 ) {                                 ///////////////////////////////////////////////////////////////////////
      for(let i = 0; number[0] >= i; i++) {
        index = i;
      }
      index = index * 10;
      readNumb = arrReadNumb[index]; 
    }
    else if (number[1] > 0) {
      for(let i = 0; number[0] >= i; i++) {
        index = i;
      }
      index = index * 10;
      readNumb = arrReadNumb[index];
      for (let i = 0; number[1] >= i; i++){
        index = i;
      }
      readNumb = readNumb + ' ' + arrReadNumb[index];
    }
      
    }
    //console.log(readNumb);
    return (readNumb);
}
else if (number.length === 1){
  for (let i = 0; number[0] >= i; i++){
    index = i;
  }
  readNumb = arrReadNumb[index];
  //console.log(readNumb);
  return (readNumb);

}
else if (number == 0 && number.length === 1 ) {
  readNumb = arrReadNumb[0];
 // console.log(readNumb);
  return (readNumb);

}
//console.log('index: ',index);

//console.log('arrNumb: ', arrReadNumb)
}
