function xo(str) {
    var index = str.length - 1;
    var x= '';
    var o ='';
    var word = "";
    for(var i = 0; i <=index; i++) {
    huruf = str[i];
        if (huruf === 'x') {
            x += huruf;
        } else if (huruf === 'o') {
            o += huruf;
        }
    }
    
    if (x.length === o.length) {
        return true;
    } else {
        return false;
    }
}



  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true