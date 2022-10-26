// console.log(window);
// window.alert("Seja Bem-Vindo");

console.log(document.title);

var section = document.createElement("section");
document.body.appendChild(section);
var H1 = document.createElement("H1");
H1.innerHTML = "Texto Lero-Lero";
section.appendChild(H1);
var P = document.createElement("P");
P.innerHTML = "Evidentemente, a competitividade nas transações comerciais assume importantes posições no estabelecimento dos modos de operação convencionais.";
section.appendChild(P);


var article = document.createElement("article")
document.body.appendChild(article);
var H1 = document.createElement("H1");
H1.innerHTML = "Outro Texto Lero-Lero";
article.appendChild(H1);
var P = document.createElement("P");
P.innerHTML = "É claro que a valorização de fatores subjetivos possibilita uma melhor visão global das condições inegavelmente apropriadas.";
article.appendChild(P);

section.style.textAlign = "center"
section.style.fontFamily = "Helvetica"
section.style.background = "red"


article.style.textAlign = "center"
article.style.fontFamily = "Helvetica"
article.style.background = "yellow"
