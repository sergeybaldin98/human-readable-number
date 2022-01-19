module.exports = function toReadable (number) {
  len = (String (number)).length;
  if (number==0){
      return 'zero';
  }
  //   dlina chisla 1
  if (len == 1){
      return one(number);
  }
  //   dlina chisla 2
  if (len == 2 ){
      return two_4(number);
  }
  //   dlina chisla 3
  if (len == 3){
      let a = Math.floor(number/100);
      let b = number%100;
      let h = ' hundred';
      if(b == 0){
          return one(a) + h;
      }
      else{
          if(b<10 && b>0){
              return one(a) + h + ' ' + one(b);
          }
          else{
              if (b>=10 && b<20){
                  return one(a) + h + ' ' + two_1(b);
              }
              else{
                  if (b>=20 && b<100){
                    return one(a) + h + ' ' + two_3(b);
                  }
              }
              
          }
      }
      
  }
}

function one (n) {
  switch (n) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
  }
}
function two_1 (n){
    switch (n){
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 15: return 'fifteen';
        case 18: return 'eighteen';
    }
    if (n==14 || n==16 || n==17 || n==19){
        let a = n%10;
        return one(a) + 'teen';
    }
}
function two_2 (n){
    let f = Math.floor(n/10);
    switch (f){
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
    }
}
function two_3 (n){
    let a = n%10;
      if (a>0){
          return  two_2(n) + ' ' + one(a);
      }else{
          return two_2(n);
      }
}
function two_4 (n){
    if (len == 2 && n<20){
      return two_1(n);
  }
  if (len == 2 && n>=20 && n<100){
      return two_3(n);
  }
}
