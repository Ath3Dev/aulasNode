// Import
const http = require('http');
const axios = require('axios');

// Criando função para lidar com as requisiçoes da Api
const requestMain = (req, res) => {
    // URL da api que iremos consumir
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    //Fazendo uma requisição HTTP GET com API
    axios.get(apiUrl)
        .then((apiResponse) => {
            // configurando o cabeçalho da resposta
            res.writeHead(200, { 'Content-Type': 'text/plain' });

            // Exibindo os dados retornados na resposta 
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
        })
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })
}

// Criando servidor
const server = http.createServer(requestMain);

// Definindo a porta, criada com letra maiuscula por ser uma variavel de ambiente
const PORT = 3000;

// Inicializando o servidor e observando a porta definida
server.listen(PORT, () => {
    console.log(`Servidor em funcionamento: http://localhost:${PORT}`)
});