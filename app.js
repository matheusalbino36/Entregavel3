const express = require('express');
const app = express();
const port = 3001;

app.use(express.json()); 

app.get('/', function(req, res) {
    res.send('Oi, mundo :-)');
});

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida!";
    }
    return a / b;
}

app.post('/soma', function(req, res) {
    const body = req.body;
    const num1 = Number(body.a);
    const num2 = Number(body.b);
    
    const resultado = soma(num1, num2);
    res.send(`O resultado da soma de ${num1} e ${num2} é ${resultado}`);
});

app.post('/subtracao', function(req, res) {
    const body = req.body;
    const num1 = Number(body.a);
    const num2 = Number(body.b);
    
    const resultado = subtracao(num1, num2);
    res.send(`O resultado da subtração de ${num1} e ${num2} é ${resultado}`);
});

app.post('/multiplicacao', function(req, res) {
    const body = req.body;
    const num1 = Number(body.a);
    const num2 = Number(body.b);
    
    const resultado = multiplicacao(num1, num2);
    res.send(`O resultado da multiplicação de ${num1} e ${num2} é ${resultado}`);
});

app.post('/divisao', function(req, res) {
    const body = req.body;
    const num1 = Number(body.a);
    const num2 = Number(body.b);
    
    const resultado = divisao(num1, num2);
    
    if (typeof resultado === "string") {
        res.status(400).send(resultado);
    } else {
        res.send(`O resultado da divisão de ${num1} por ${num2} é ${resultado}`);
    }
});

app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
