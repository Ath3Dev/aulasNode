//importando a biblioteca do axios que é usada para consumir uma API, assim como fetch
const axios = require('axios');

// URL da API que queremos acessar
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//Requisição HTTP GET API usando o axios
axios.get(apiUrl)
    .then((response) => {
        // Exibindo os dados retornados no consoke
        console.log("", response.data);
    })
    .catch((error) => {
        // Em caso de erro, exiba o erro no console
        console.error('Erro ao acessar a API: ', error);
    })