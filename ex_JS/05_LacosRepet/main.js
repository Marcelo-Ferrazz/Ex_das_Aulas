//Exercício 1
let contador = 1;
while (contador <= 50) {
    console.log(`Valor = ${contador}`);
    contador++;
}


//Exercício 2
console.clear();
let i = 10,
    text = '';
do {
    text += ` número: ${i}\n`;
    i--;
} while (i > 0);
console.log(text);

//Exercício 3
console.clear();
for (let i = 0; i <= 100; i++) 
    {if (i%2 == 0)
    console.log(`número: ${i}\n`);
}