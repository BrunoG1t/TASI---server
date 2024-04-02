// Importando os módulos
const http = require('http');
const url = require('url');
const fs = require('fs');

// Definindo a porta
const PORT = 4800;

// Criando o servidor
const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if (path === '/') {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        res.end('End-Point: INDEX (/)');
    } else if (path === '/imc') {
        // Lendo o arquivo HTML
        fs.readFile('imc.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                res.end('Erro interno do servidor');
            } else {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(data);
            }
        });
    } else if (path === "/notas") {
        fs.readFile('notas.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                res.end('Erro interno do servidor');
            } else {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(data);
            }
        });
        // Restante do seu código para o caminho /notas
    } else if (path === "/dolar") {
        fs.readFile('dolar.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                res.end('Erro interno do servidor');
            } else {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(data);
            }
        });
        // Restante do seu código para o caminho /dolar
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end('Erro 404 - Página não encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`[OK] - Servidor iniciado em http://localhost:${PORT} ...`);
});
