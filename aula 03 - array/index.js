const valores = [5, 7.8, 6, 9, 10]

console.log(valores)
console.log(valores.indexOf)
console.log("O tamanho do Array é: " +valores.length)
console.log(valores[3])
console.log(valores[10])

//Adiciona um elemento no fnal do Array
valores.push(28)
console.log(valores)


//
const aprovados = ['Um ', 'Dois','Tres', 'Quadro','Cinco', 'Seis','Sete', 'Oito']

//Tradicional function
aprovados.forEach(function(nome, i) 
{
    console.log()
})

//Arrow function
aprovados.forEach((nome) => {
    console.log(aprovados)
})


//Armazena uma função numa variavel
