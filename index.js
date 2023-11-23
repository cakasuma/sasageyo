const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello sasageyo');
    }
})

const port = 3000

server.listen(port, () => {
    console.log(`server jalan di port: ${port}`)
});
