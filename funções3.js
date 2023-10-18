//Atividade (Arrow Functions)

/* 1 - Uma construtora precisa de um sistema que realiza o cálculo da aréa de diversos
terrenos retangulares por meio de uma função, você recebeu o relatório com as
medidas dos lados dos terrenos e precisa repassar os valores das áreas. Sendo assim,
crie a função para realizar os cálculos dos seguintes terrenos (crie uma função e faça 4
chamadas passando diferentes valores de parâmetros):
- Terreno padrão: largura: 50m / profundidade: 40m
- Terreno sobrado: largura: 30m / profundidade: 40m
- Terreno mansão: largura: 100m / profundidade: 100m
- Terreno comercial: largura: 40m / profundidade: 40m*/

areaRetangular = (largura, profundidade) => largura * profundidade;
let padrão = areaRetangular(50, 40);
let sobrado = areaRetangular(30, 40);            //ok
let mansão = areaRetangular(100, 100);
let comercial = areaRetangular(40, 40);

alert(`Area padrão e: ${padrão}\n Area sobrado e: ${sobrado}\n Area mansão e: ${mansão}\n Area comercial e: ${comercial}`)


/* 2 - A partir da função de área retangular criada anteriormente, crie uma função que calcula
a área de um triangulo, a qual deve receber um valor de base e altura como argumento,
calcular a área pela função área e divide o resultado por 2 para ter o retorno correto.*/

areaRetangular = (largura, profundidade) => largura * profundidade;
                                                                            // ok
areaTriangulo = (base, altura) => areaRetangular(base, altura) / 2;


/* 4 - Crie uma função que determine quantos números primos existem dentro de um
intervalo que o usuário informar. Utilize uma abordagem de repetição com for ou while.
Utilizando funções, fazer um sistema que receba um número e retorne se ele é par ou
ímpar.*/






/* 5 - Criar uma calculadora utilizando funções para cada operação. O usuário deve digitar o
primeiro número, o segundo número e em seguida a operação que deseja realizar (1 -
Soma 2 - Subtração 3 - Multiplicação 4 - Divisão). O resultado deve ser mostrado na tela.
Digite o primeiro número:
Digite o segundo número:
Qual operação deseja realizar? 1 – Soma 2 – Subtração 3 – Multiplicação 4 - Divisão*/

soma = (a, b) => a + b;
resta = (a, b) => a - b;
multiplica = (a, b) => a * b;
divide = (a, b) => a / b;

operacao = parseInt(prompt("Qual operação deseja realizar?\n1 – Soma\n2 – Subtração\n3 – Multiplicação\n4 - Divisão"));

let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch(operacao) {

    case 1:
    resultado = soma(a, b);
    break;

    case 2:
    resultado = resta(a, b);
    break;                      //////  ok

    case 3:
    resultado = multiplica(a, b);
    break;

    case 4:
    resultado = divide(a, b);
    break;

    default:

    alert('operacao nao permitida')

}

alert(`O resultado é: ${resultado}`);


/* 6 - Crie 2 funções: a primeira recebe 3 números como argumento, realize a soma desses
3 números e chama a segunda função, que por sua vez recebe como argumento
uma soma e uma quantidade e retorna a média. Armazene o resultado da média em
uma variável e exiba por um alert.
Faça um programa que recebe três números do usuário, e identifica o maior através
de uma função e o menor número através de outra função e depois os exibe por um
alert.*/


somar = (a, b, c) => a + b+ c;


media = (soma, quantidade) => soma / quantidade;


let num1 = parseFloat(prompt('Digite o primer numero'));
let num2 = parseFloat(prompt('Digite o segundo numero'));
let num3 = parseFloat(prompt('Digite o tercer numero'));

let somaNum = somar(num1, num2, num3);

let quantidadeNum = 3;

let mediaNum = media(somaNum, quantidadeNum);

alert(`A media e ${mediaNum}`)


/* 7 - Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até
ele.*/

encontrarPrimos = (numeroDigitado) => {
    
    let listaPrimos = [];

   for(i = 2; i <= numeroDigitado; i++) {

       var primo = true; 

         for(x = 2; x < i; x++) {
            if (i % x == 0) {
            primo = false;
            break;
         }
       }

          if (primo) {
            listaPrimos.push(i)
          }
   }
    
   return listaPrimos
};


var numeroDigitado = parseInt(prompt('Digite um numero inteiro'))

var primosAteNumero = encontrarPrimos(numeroDigitado);


alert(`Os numeros primos ate: ${numeroDigitado} sao:\n ${primosAteNumero}`)


/* 8 - Faça um programa que recebe três números do usuário, e identifica o maior através
de uma função e o menor número através de outra função e depois os exibe por um
alert.*/

let contador = 0;
let lista = [];

while(contador < 3) {
    let numeroUsuario = Number(prompt('Digite um numero'));
    lista.push(numeroUsuario)
    contador++
}

console.log(lista);

listaOrdenada = lista.sort((a, b) => a-b);

numeroMenor = listaOrdenada[0];
numeroMaior = listaOrdenada[listaOrdenada.length -1];

console.log(numeroMenor)
console.log(numeroMaior)

//Atividade (Arrow Functions + métodos de Array)

/* 1 Crie um programa que recebe 10 números de inscrição para um campeonato, a partir
desses números, crie um array para os jogadores do time de números pares e um outro
para os jogadores do time de números ímpares e exiba na tela se os times estão com a
mesma quantidade de jogadores.*/

let counter = 0;

let arrayPares = [];
let arrayImpares = [];

while(counter < 10) {
    let numeroInscrição = Number(prompt('Digite um numero'));

    if (numeroInscrição % 2 == 0) {
        arrayPares.push(numeroInscrição)
    } else {
        arrayImpares.push(numeroInscrição)
    }
    counter++
}

console.log(arrayPares);
console.log(arrayImpares);

if (arrayPares.length === arrayImpares.length) {
    alert('Os times estão com a mesma quantidade de jogadores')
} else {
    alert('Os times NAO tem a mesma quantidade de jogadores')
}

/* 2 - Crie um laço de repetição para solicitar 5 idades e armazená-las em um array, use o
método every para verificar se todos os usuários são maiores de idade.*/

let i = 0;
let arrayIdades = [];

while (i < 5) {
    let idades = Number(prompt('Digite a sua idade'));
    arrayIdades.push(idades)
    i++
}

console.log(arrayIdades);

let verifica = arrayIdades.every((maiores) => maiores >= 18);

console.log(verifica);

/*DESAFIO REDUCE 1: Crie um laço de repetição para solicitar 5 números, armazene-os em
um array e use o método reduce para encontrar e mostrar o maior valor no array.*/

let x = 0;
let numericArray = [];

while(x < 5) {
    let solicitaNumero = Number(prompt('Digite um numero'));
    numericArray.push(solicitaNumero)
    x++;
}

console.log(numericArray);

const numeroMaior = numericArray.reduce((acumulador, numero) => {
    if (numero > acumulador) {
        return numero;
    } else {
        return acumulador
    }
}, numericArray[0])


console.log(numeroMaior);



/* 3 Crie um array de preços e use o método filter para criar um novo array que contenha
apenas os preços inferioriores a R$ 50.*/

const preços = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let menoresCinquenta = preços.filter((valor) => valor < 50);

console.log(menoresCinquenta)


/* Fazer um programa no qual o usuário deve montar uma salada de frutas com uma
cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando
for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”.
Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)*/

let listaSalada = [];
let frutaSemrepeticao = [];
let quantidadeSemrepeticao = [];

let continuar = true;

while(continuar == true){
    let fruta = prompt("Qual a fruta de agora?").toLowerCase()
    if(fruta == "cereja"){
        continuar = false
    }
    listaSalada.push(fruta)  
}

alert('Sua salada de frutas está pronta!');
alert(`Sua salada tem essas frutas: ${listaSalada}`);

listaSalada.forEach((frutaAtual) => {let indiceDaFrutaAtual = frutaSemrepeticao.indexOf(frutaAtual);
if(indiceDaFrutaAtual == -1) {
    frutaSemrepeticao.push(frutaAtual)
    quantidadeSemrepeticao.push(1)
} else {
     
    quantidadeSemrepeticao[indiceDaFrutaAtual]++
}
}
)
for(let i = 0; i < frutaSemrepeticao.length; i++){
    let mensagem = `A fruta ${frutaSemrepeticao[i]} tem ${quantidadeSemrepeticao[i]} elementos na salada`
    alert(mensagem)
}



/* DESAFIO REDUCE 2: Crie uma calculadora de médias solicitando as notas por meio
de um laço de repetição while, onde o usuário tenha a opção de digitar uma nova
nota ou verificar resultado digitando “-1”. Armazene as notas em um Array e utilize
o método reduce para obter a soma delas, após ter a soma calcule a média dividindo
a soma pelo tamanho do array (array.length).*/

let notas = []

// Variavel para controlar o laço
let continuar = true

while(continuar == true){
    let nota = Number(prompt("Digite uma nota ou -1 para parar"))
    if(nota == -1){
        // interrupção do laço de repetição
        continuar = false
    } else {
        // adicionar a nota no vetor de notas
        notas.push(nota)
    }
}

// Aqui já teremos um vetor com as notas
// Encontrar a soma das notas
let somaDasNotas = notas.reduce((somaAcumulada, notaAtual) => {
    let novaSoma = somaAcumulada + notaAtual
    return novaSoma
}, 0)

let quantidadeDeNotas = notas.length
let media = somaDasNotas / quantidadeDeNotas
alert(`A sua média foi ${media}`)