'use strict';
var colors = require('colors/safe');


let resultNumberArray = []; //результирующий массив, куда мы будем складывать подходящие числа

let firstNumber = Number(process.argv[2]);
let secondNumber = Number(process.argv[3]);

let errorHandle = colors.red('No number in a range');

if (isNaN(firstNumber) || isNaN(secondNumber)) console.log(errorHandle); //проверка

const colorConfig = {
    green: true,
    yellow: false,
    red: false
}//сделал небольшой конфиг чтобы было проще работать с переключением цветов. Может есть какойто toggle как в DOM? подскажите, пожалуйста, если такое есть

// подсмотрел решение простых чисел на LearnJavaScript. Два дня пытался решить сам, но не смог. Вывод уже свой
nextPrime:
for (let i = firstNumber; i <= secondNumber; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    resultNumberArray.push(i) //собираем массив
}

resultNumberArray = resultNumberArray
    .map(element => {
        if (colorConfig.green) {
            colorConfig.green = false;
            colorConfig.yellow = true;
            return (colors.green(`${element}`));
        } else if (colorConfig.yellow) {
            colorConfig.yellow = false;
            colorConfig.red = true;
            return (colors.yellow(`${element}`));
        } else if (colorConfig.red) {
            colorConfig.red = false;
            colorConfig.green = true;
            return (colors.red(`${element}`));
        }
    })
    .join(' ') //каждый элемент массива прошел изменение и потом массив был "склеен" через пробелы, чтобы не занимать много строк


console.log(resultNumberArray.length === 0 ? console.log(colors.red('Programm is over')) : resultNumberArray)