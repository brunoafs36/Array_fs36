// Como criar uma array/lista vazio
const nomes = [];

const nomePessoas = ['Alberto', 'Pedro', 'Dárquio', 'Rafa'];

// adicionando novos elementos a array
nomes.push('Bruno Araújo');

//console.log(nomes)

nomes.push('Edmar')

//console.log(nomes)

nomes.push(25)

//console.log(nomes)

////////////////////////

const idades = [1, 23, 92, 8, 58, 60, 20, 87, 22, 36]

//console.log(idades)

//Imprimir o 6º elemento, assim o índice = posição - 1, 6-1 = 5 (índice)
//console.log(idades[5]);

//Iterar uma array

for(let index = 0; index < idades.length; index++ ) {
   // console.log(idades[index]);
}

idades.forEach(function(value) {
    console.log(value);
})