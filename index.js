var a = 'Olá mundo'
//a = 10

let b = "outro valor"
//b = 15

// variavel que existe mais esta vazio 
var vazio = null

//console.log(a)
//console.log(b)

var carro = {
    marca: "Volksvagem",
    modelo: "Gol",
    ano: 2014
}
//templet scring
//console.log("Marca do carro é " + carro.marca)
//console.log("O ano dele é: " + carro.ano)
//console.log("E o modelo é: " + carro.modelo)
//console.log("Isso é uma demonstracao de um " + typeof carro)
//
//console.log(`Agora usando uma interposação tradicional para a mesma frase usando template strings
  //  Frase: A marca do carro é: ${carro.marca}, ano é: ${carro.ano} e o modelo: ${carro.modelo}`)


const avaliacao1 = 12
const acaliacao2 = 15
const avai = 17
const total = avaliacao1 / acaliacao2 * avai

const apenas2 = total.toFixed(2)

console.log(apenas2)
console.log(total)

console.log(typeof apenas2)
console.log(typeof total)


let nome = 'William '
let idade = 26
let cidade = 'Goiânia'
let uf = 'GO'

console.log('Olá, meu nome é '+nome+'Tenho ' +idade+ ' de idade e moro em ' +cidade + '-'+uf)

console.log(nome.charAt(1))
console.log(nome.indexOf('i'))
