/* 1 - Crie uma função anônima para gerar uma mensagem de convite de casamento, que
deve receber nomeConvidado, data, horário, local e nomeNoivos e a partir disso
monte uma mensagem convidando a pessoa para o casamento. Realize pelo menos 3
chamadas para ela e valide se o retorno foi o esperado.*/

let convite = function(nomeConvidado, data, horario, local, nomeNoivos) {

    alert(`Sr(a) ${nomeConvidado}, você está convidado o dia ${data} as ${horario} horas, em ${local} ao casemento de ${nomeNoivos}`)
 }
 
 convite('Eduardo', '10 Setembro', '22:00', 'Salão de festas "Magnolia" ', 'Joan e Marçia' )

/* 2 - Crie uma calculadora de média que solicite ao usuário um conjunto de números e
calcule a média deles. Use uma função autoinvocada para encapsular o código da
calculadora.*/

const media = (function calculadora() {
    let num1 = Number(prompt('Digite o primer numero'));
    let num2 = Number(prompt('Digite o seundo numero'));

    let result = (num1 + num2) / 2;

    return result;
})();

alert(media)

/* 3 - Crie um Array numérico com 10 elementos e a partir dele utilize os métodos
mostrados para verificar se todos são ímpares. Além disse crie outro Array a partir
dele onde os novos elementos devem ser os antigos ao quadrado.*/

let arrayNumerico = [2, 3, 5, 8, 9, 16, 14, 88, 72, 31, 5];

arrayNumerico.every(checkImpares);

function checkImpares(numero) {
    if (numero % 2 == 1) {
        return true
    }
}

arrayNumerico.map(numerosAoquadrado);

function numerosAoquadrado(num) {
    return (num * num);
}