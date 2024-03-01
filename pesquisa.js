const chalk = require('chalk');
const inquirer = require('inquirer');

//função principal que executa
function main(){
    console.log("Olá");
    console.log(chalk.bgRed.white('Bem vindo ao questionário'));

    //Pergunta o nome do princeso
    inquirer.prompt({
        name: 'name',
        message: 'Qual é seu nome?'
    })//Promise - JavaScript
    .then((nomeResponder) => {
        //Pergunta ao usuario sua idade
        return inquirer.prompt({
            name: 'age',
            message: 'Informe sua idade: '
        })
        .then((idadeResponder) => {
            //Imprimir mensagem na tela
            console.log(chalk.bgBlueBright(`Olá ${nomeResponder.name}! Sua idade é ${idadeResponder.age} anos!`))
        })
    })
    
}
main();