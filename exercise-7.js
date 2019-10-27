// 1. Menyusun barisan Bintang

var rows1;
for (var rows1 = 5 ; rows1 > 0; rows1-- ){
    console.log('*');
}


// 2. Meyusun barisan bintang dengan nested looping

var rows2;
for (var rows = 5 ; rows > 0; rows--) {
    var star = "";
    for (var rows2 = 1 ; rows2 <=5; rows2++) {
        star = star + "*";
    }
    console.log(star);
}


// 3. Menyusun barisan tangga bintang dengan nested looping


var rows3 = 5;
for (var i = 1; i <=rows3 ; i++) {
    var bintang = "";
    for (var j = 1; j <= i; j++) {
        bintang = bintang + "*";
    }
    console.log(bintang);
}
