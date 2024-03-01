const chalk = require('chalk');
const inquirer = require('inquirer');

// Função para somar 2 numeros
function somarNumeros(n1, n2) {
    return n1 + n2;
}
// Função pra subtrair 2 numeros
function subtrairNumeros(n1, n2) {
    return n1 - n2;
}
// Função pra multiplicar 2 numeros
function multiplicarNumeros(n1, n2) {
    return n1 * n2;
}
// Função pra dividir 2 numeros
function dividirNumeros(n1, n2) {
    return n1 / n2;
}

function main() {
    console.log(chalk.bgRed.white('Olá, seja bem-vindo!'));

    // Perguntar ao usuario dois números
    inquirer.prompt([
        {
            name: 'number1',
            message: 'Informe o primeiro número: '
        },
        {
            name: 'number2',
            message: 'Informe o segundo número: '
        }
    ]) //Promise - JS
        .then((resposta) => {
            //Converter os números para valores númericos usando a função nativa Number
            const numero = Number(resposta.number1);
            const numero2 = Number(resposta.number2);

            // Calculos
            const resultadoSoma = somarNumeros(numero, numero2);
            const resultadoSubtracao = subtrairNumeros(numero, numero2);
            const resultadoMultiplicacao = multiplicarNumeros(numero, numero2);
            const resultadoDivisao = dividirNumeros(numero, numero2);

            inquirer.prompt({
                name: 'opcao',
                message: 'Digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão: '
            })
                .then((opcaoEscolhida) => {
                    switch (Number(opcaoEscolhida.opcao)) {
                        case 1:
                            console.log(chalk.bgGreen(`A soma de ${numero} e ${numero2} é igual à ${resultadoSoma}`))
                            break;
                        case 2:
                            console.log(chalk.bgGreen(`A soma de ${numero} e ${numero2} é igual à ${resultadoSubtracao}`))
                            break;
                        case 3:
                            console.log(chalk.bgGreen(`A soma de ${numero} e ${numero2} é igual à ${resultadoMultiplicacao}`))
                            break;
                        case 4:
                            console.log(chalk.bgGreen(`A soma de ${numero} e ${numero2} é igual à ${resultadoDivisao}`))
                            break;
                        default:
                            console.log(chalk.bgRed(`ERRO!`))
                            break;

                    }
                })

        })
}

main();