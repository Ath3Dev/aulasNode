// Importa o módulo 'http' para criar um servidor HTTP
const http = require('http');
// Importa o módulo 'axios' para fazer requisições HTTP
const axios = require('axios');

// Função para lidar com a requisição de recursos
const requestResource = (req, res) => {
    // Divide a URL da requisição em partes usando o caractere '/' como separador.
    // O método split() retorna um array contendo cada parte da URL como um elemento.
    // Por exemplo, se a URL for "https://example.com/resource/123",
    // o resultado será ['https:', '', 'example.com', 'resource', '123'].
    // Em seguida, a segunda parte desse array (índice 1) é atribuída à variável 'resource'.
    // Isso extrai o nome do recurso da URL da requisição.
    const resource = req.url.split('/')[1];

    // Similarmente, divide a URL da requisição em partes usando '/' como separador.
    // O terceiro elemento desse array (índice 2) é atribuído à variável 'id'.
    // Isso extrai o ID específico do recurso da URL da requisição.
    const id = req.url.split('/')[2];

    // URL da API que iremos consumir, usando o recurso e o ID fornecidos na requisição
    const apiUrl = `https://jsonplaceholder.typicode.com/${resource}/${id}`;

    // Faz uma requisição HTTP GET para a API
    axios.get(apiUrl)
        .then((apiResponse) => {
            // Se a requisição for bem-sucedida, retorna os dados da API como resposta
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
        })
        .catch((error) => {
            // Se ocorrer um erro durante a requisição, retorna um erro interno ao cliente
            console.error('Erro ao acessar a API');
        });
}

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    // Verifica se a URL da requisição começa com '/'
    if (req.url.startsWith('/')) {
        // Se sim, chama a função requestResource para lidar com a requisição
        requestResource(req, res);
    } else {
        // Se não, retorna um código de erro 404 indicando que o recurso não foi encontrado
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso não encontrado');
    }
});

// Define a porta em que o servidor irá escutar as requisições
const PORT = 3000;

// Inicia o servidor e escuta na porta especificada
server.listen(PORT, () => {
    console.log(`Servidor em funcionamento: http://localhost:${PORT}`);
});

console.log('Rotas disponíveis:');
console.log('/posts/id');
console.log('/comments/id');
console.log('/albums/id');
console.log('/photos/id');
console.log('/todos/id');
console.log('/users/id');