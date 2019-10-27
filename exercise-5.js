// 1. Let's Form a Sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);



// 2. Index Accesing -1 by 1

var indexWord = 'wow JavaScript is so cool';
var exampleFirstWord = indexWord[0] + indexWord[1] + indexWord[2];
var indexSecond = indexWord[4] + indexWord[5] + indexWord[6] + indexWord[7] + indexWord[8] + indexWord[9] + indexWord[10] + indexWord[11] + indexWord[12] + indexWord[13];
var indexThird = indexWord[15] + indexWord[16];
var indexFourth = indexWord[18] + indexWord[19];
var indexFifth = indexWord[indexWord.length -4] + indexWord[indexWord.length -3] + indexWord[indexWord.length -2] + indexWord[indexWord.length -1];

console.log('First word: ' + exampleFirstWord);
console.log('Second word: ' + indexSecond);
console.log('Third word: ' + indexThird);
console.log('Fourth word: ' + indexFourth); 
console.log('Fifth word: ' + indexFifth);


// 3. Breaking sentence (Again) using Substring

var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17); 
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + firstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);



// 4. Breaking sentence (yet again) and Count length

var word4 = 'wow JavaScript is so cool';
var firstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14);
var thirdWord4 = word4.substring(15, 17); 
var fourthWord4 = word4.substring(18, 20);
var fifthWord4 = word4.substring(21, 25);

var firstWordLength = firstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + firstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);
