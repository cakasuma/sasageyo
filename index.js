const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello');
})

server.listen(80, () => {
    console.log('server jalan')
});
