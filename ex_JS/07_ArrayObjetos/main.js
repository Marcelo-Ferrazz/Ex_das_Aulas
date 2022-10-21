// var nome = "Jéssica "
// var nota = 9
// var nota2 = 9
// var nota3 = 9
// var nota4 = 9

var alunos = [
    {
        nome: "Marcelo",
        texto: 'Levar o lixo para fora',
        nota: 9,
        nota2: 10,
        nota3: 5,
        nota4: 5,
    },
    {
        nome: "Colin",
        texto: 'Encontrar com o chefe',
        nota: 9,
        nota2: 9,
        nota3: 5,
        nota4: 5,
    },
    {
        nome: "Vitor",
        texto: 'Consulta no dentista',
        nota: 5,
        nota2: 5,
        nota3: 5,
        nota4: 5,
    },
];

var mediaNotas = (nota + nota2 + nota3 + nota4) / 4;
console.log(mediaNotas)
if (mediaNotas >= 7)
    console.log("Aprovado")
else
    console.log("Reprovado")
console.log(alunos)