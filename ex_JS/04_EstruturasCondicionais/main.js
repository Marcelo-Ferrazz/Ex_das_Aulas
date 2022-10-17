//Exercício 01
const preço1 = 1.79;
const preço2 = 1.3;
const preço3 = 3.7;

console.log(preço2);
console.log(preço3);
if (preço1 < preço2) console.log(`Menor preço ${preço1}`);

//Exercício 02
var a = 2;
var b = 1;
var c = 3;
if (b < a < c) console.log('1,2,3');

//Exercício 03
const numero = 4;
if (numero * 400 === 1600 && !isNaN(numero)) {
    console.log(`${numero} é correspondente a 1600 que é ano bissexto`);
}