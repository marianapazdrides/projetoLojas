// Importação das funções da calculadora
const calculadora = require("../../src/calculadora.js");

//Importação do arquivo de massa para o teste de divisão
const massaDivisaoJSON = require("../../vendors/massaUnidade")

test("somar 2 + 3", () => {
    // 1 - Configura
    // 1.1 Dados de entrada - Input
    const num1 = 2;
    const num2 = 3;
    // 1.2 Dados de saída - Output - Resultado Esperado
    const resultadoEsperado = 5;

    // 2 - Executa
    const resultadoAtual = calculadora.somarDoisNumeros(num1,num2);

    // 3 - Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
});


test("subtrair 50 - 10", () => {
    // Configura
    const num1 = 50;
    const num2 = 10;
    const resultadoEsperado = 40;

    // Executa
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoAtual = subtrairDoisNumeros(num1, num2)

    //Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
});

test("Multiplicar 6 * 3", () => {
    // Configura
    const num1 = 6;
    const num2 = 3;
    const resultadoEsperado = 18;

    // Executa / Valida
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    expect(multiplicarDoisNumeros(num1, num2)).toBe(resultadoEsperado)
    
});

//Teste positivo
test("Dividir 8 / 4", () => {
    // Configura
    const num1 = 8;
    const num2 = 4;
    const resultadoEsperado = 2;

    // Executa / Valida
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado)
    
});

// Teste Negativo / Teste de exceção
test("Dividir por zero", () => {
    const num1 = 7;
    const num2 = 0;
    const resultadoEsperado = Infinity;
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});

// Data Driven Test para a função dividirDoisNumeros
// Lista / Array que contém a massa de teste
const massaDivisao = [
    [8,4,2],
    [7,0,Infinity],
    [9,3,3],
    [-10,2,-5],
    [-20,-5,4]

]

// Script que usa a massa de teste no formato lista
test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado)
});

// Script que usa a massa de teste no formato JSON 
test.each(massaDivisaoJSON.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("Divida %f / %f", (num1, num2, resultadoEsperado) => {
    expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado)
})