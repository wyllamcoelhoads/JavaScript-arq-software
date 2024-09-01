const cartex = [
    {
        name : "Notebook",
        price : 35025
    },
    {
        name : "Fone de ouvido",
        price : 355
    },
    {
        name : "Teclado",
        price : 325
    },
    {
        name : "Telefone",
        price : 3025
    },
    {
        name : "Monitor",
        price : 5025
    },
]

//const jsonParse = json => JSON.parse(json)  
const preco = product => product.
const nome = product => product.name

const result = cartex.map(preco)
console.log(result)

const result1 = cartex.map(nome)
console.log(result1)