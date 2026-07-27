
// Температура повітря 
const intTempe = 24 ;
console.log('Air temperature:', intTempe, '°'); 
// Назва книжки
const nameBook;
console.log('Book name:', nameBook);
// Довжина 
const length = 3 ;
// Ширина
const width = 4 ; 
// площа трикутника
const areaRectangle = (length * width);
console.log('Rectangle area:', areaRectangle);
// Чи є фігура трикутником 
const tringleShape = false ;
console.log('Tringle Shape:', tringleShape); 
// Брак елементу
const element = null; 
console.log('Element:', element)

// множеня двух елементив 
const firstVar = 3 ;
const secondVar = 10 ; 
const resultMul = firstVar * secondVar ;
console.log('Result of multiplication :', resultMul); 
// ділення 
const firstVar_1 = 3 ;
const secondVar_1 = 10 ; 
const resultDiv = firstVar_1/secondVar_1 ;
console.log('Result of division :', resultDiv);
//  Cумма 
const firstVar_2 = 3 ;
const secondVar_2 = 10 ; 
const resultSumm = firstVar_2 + secondVar_2 ;
console.log('Result of summ :', resultSumm);
// 4 
const number = 11 ; 
const bool = true ; 
const string = 'java script';
const stringNumber = '100';

console.log('Number:', number);
console.log('Bool :', bool);
console.log('String :',string );
console.log('String number :',stringNumber );
// 5 
let num = 1; 
num += 11 ;
console.log('num + :', num);
num -= 11 ;
console.log('num - :', num);
num *= 11 ; 
console.log('num * :', num); 
num /= 11 ;
console.log('num / :', num);
num++ ; 
console.log('num +1 :', num);
num--;
console.log('num -1 :', num);
// 1
let firstNumber = Number(prompt ('Введіть число:'));
const square = firstNumber ** 2;
alert('Квадрат числа :' + square);
// 2
let numberArf1 = Number(prompt('Введіть перше число:'));
let numberArf2 = Number(prompt('Введіть друге число:'));
const aritchmeticMean = (numberArf1 + numberArf2)/2 ; 
alert('Середє арифметичне :' + aritchmeticMean);
// 3
let minNum = Number(prompt('Подайте кількість хвилин :')) 
const secondsNum = minNum * 60 ; 
alert('Кількість в секундах :'+ secondsNum);
// 4
const greeting = 'Hello';
let userName = prompt('Веддіть свое імя :');
const sumName = greeting + ',' + userName + '!';
alert(sumName);

