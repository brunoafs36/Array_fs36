// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach(function(v, i) {
//     const n = 1;
//     console.log(n +"x" + v + "=" +(n*v));

// })

const tabuadaResultado = document.getElementById("tabuada");

function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const de = parseInt(document.getElementById("de").value);
    const ate = parseInt(document.getElementById("ate").value);

//    console.log(numero,de,ate);

let tabuada = '';

   Array.from({length: ate }, function(v, k) {
    const multiplicador = k+1;
    const linhaTabuada = numero + ' x ' + multiplicador + ' = ' + (numero * multiplicador) + '\n';
    console.log(linhaTabuada);

    tabuada = tabuada + linhaTabuada;

   })

   console.log(tabuada);

   criarItemTabuadaResultado(tabuada)

};

function criarItemTabuadaResultado(resultado ) {
    //Criar a Div com a classe 'tabuada item' e insere a string pronta dentro da div
    const item = document.createElement('div')
    item.className = 'tabuada-item'
    item.innerText = resultado

    //Inserir a div criada na div do resultado que já existe no html
    tabuadaResultado.appendChild(item)

}

