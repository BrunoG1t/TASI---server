//UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
//Análise e Desenvolvimento de Sistemas
//Disciplina: Tópicos Avançados de SI - I
//Autor: Bruno Henrique Silva Santos
//Desafio: Criar caminhos para calcular o imc, dolar e nota

// Definindo a porta
const PORT = 4800;

// Importando os módulos
const http = require('http');
const url = require('url');


// Criando o servidor
const server = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;


    if (path === '/') {
        res.writeHead(200, { "Content-Type": "/plain; charset=utf-8" })
        res.end('End-Point: INDEX (' / ')');
    } else if (path === '/imc') {
        const peso = parseFloat(query.peso);
        const altura = parseFloat(query.altura);


        if (isNaN(peso) || isNaN(altura)) {
            res.writeHead(200, { "Content-Type": "html/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {
            const imc =  peso / (altura ^ 2) 
            if (imc < 18.5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Abaixo do peso IMC:${imc}`)
            } else if (imc >= 18.5 && imc < 24.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Peso normal IMC:${imc}`)
            } else if (imc > 25 && imc < 29.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Excesso de peso IMC:${imc}`)
            } else if (imc > 30 && imc < 34.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade classe I IMC:${imc}`)
            } else if (imc > 35 && imc < 39.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade classe II IMC:${imc}`)
            } else {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade classe III IMC:${imc}`)
            }
        }

    } else if (path === "/notas") {
        const notaA1 = parseFloat(query.n1);
        const notaA2 = parseFloat(query.n2);

        if (isNaN(notaA1) || isNaN(notaA2)) {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {
            const media = (notaA1 + notaA2) / 2
            if (media >= 6) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Aprovado media: ${media}`)
            } else if (media == 5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Recuperação media: ${media}`)
            } else if (media < 5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Reprovado media${media}`)
            }

        }
    } else if (path === "/dolar") {

        const valorDolar = parseFloat(query.dolar);
        const valorReais = parseFloat(query.reais);

        if (isNaN(valorDolar) || isNaN(valorReais)) {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {

            const convertido = valorReais / valorDolar

            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end(`R$${valorReais.toFixed(2)} por U$${valorDolar.toFixed(2)} é igaul u$${convertido.toFixed(2)}convertido`)
        }
    } else {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        res.end('Erro 404')
    }

});

server.listen(PORT, () => {
    console.log(`[OK] - Servidor iniciado em http://localhost:${PORT} ...`);
});
