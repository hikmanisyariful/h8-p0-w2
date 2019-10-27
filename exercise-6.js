
// 1. Melakukan Looping menggunakan while    

var loop1 = 2;
console.log('LOOPING PERTAMA');
while (loop1 <= 20) {
    console.log(loop1 + ' - I love coding');
    loop1 +=2;
}



var loop2 = 20;
console.log('LOOPING KEDUA');
while (loop2 >= 2) {
    console.log(loop2 + ' - I will become fullstack developer');
    loop2 -= 2;
}



// 2. Melakukan Looping menggunakan For

console.log('LOOPING PERTAMA');
for (var loopX = 1; loopX <= 20; loopX++) {
    console.log(loopX + ' - I love coding');
}



console.log('LOOPING KEDUA');
for (var loopY = 20; loopY >=1; loopY--) {
    console.log(loopY + ' - I will become fullstack developer');
}



// 3. Angka Ganjil dan Genap

for (var counter = 1; counter <= 100; counter++) {
    
    if (counter % 2 != 0) {
        console.log(' GANJIL');
    } else {
        console.log(' GENAP');
    }
}

// //Looping untuk pertambahan counter 2

for (var x1 = 1; x1 <= 100; x1 += 2) {
    if (x1 % 3 === 0) {
        console.log(x1 + ' KELIPATAN 3');
    }
}

// //Looping untuk pertambahan counter 5

for (var x2 = 1; x2 <=100; x2 += 5) {
    if (x2 % 6 === 0) {
        console.log(x2 + ' KELIPATAN 6');
    }
}

// //Looping untuk pertambahan counter 9

for (var x3 = 1; x3 <=100; x3 += 9) {
    if (x3 % 10 === 0) {
        console.log(x3 + ' KELIPATAN 10');
    }
}

