// 1. Tugas 1
function shoutOut() {
    greeting='Hallo Function!';
    return greeting;
};

console.log(shoutOut());

// 2. Tugas 2
function calculateMultiply(num1, num2) {
    var hasilPerkalian = num1 * num2;
    return hasilPerkalian;
};
var num1 = 5;
var num2 = 6;
console.log(calculateMultiply(num1, num2));

// 3. Tugas 3
function processSentence(name, age, address, hoby) {
    var sentence  = ('Nama saya ' + name + ", umur saya " + age + ", alamat saya " + address + ", dan saya punya hobi yaitu " + hoby + ".");
    return sentence;
};

var name = 'Agus';
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hoby = 'gaming';

console.log(processSentence(name, age, address, hoby));