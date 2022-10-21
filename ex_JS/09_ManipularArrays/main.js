const number = [17 ,43, 8, 4, 97, 56, 29, 13]
number.forEach(verificacao)
function verificacao(valor) {
    if (valor % 2 == 0)
    {
    console.log(`esse é par ${valor}`)
    }else {
    console.log(`esse é impar ${valor}`)
    }
}
