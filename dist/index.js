"use strict";
// Importa prompt-sync usando require
const promptSync = require('prompt-sync');
const promptInstance = promptSync(); // Cria uma instância do prompt-sync com um nome diferente
// Função para calcular a média
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}
// Função principal
function main() {
    // Solicita o nome do aluno
    const nomeInput = promptInstance('Digite o nome do aluno: ');
    if (nomeInput === null) {
        console.error('Nome não fornecido.');
        return;
    }
    const nome = nomeInput; // Garante que nome é do tipo string
    // Solicita as 4 notas
    const notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota;
        while (true) {
            const notaInput = promptInstance(`Digite a nota ${i} (0 a 10): `);
            if (notaInput === null) {
                console.error('Nota não fornecida.');
                continue;
            }
            nota = parseFloat(notaInput);
            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                break;
            }
            console.log('Nota inválida. Digite um valor entre 0 e 10.');
        }
        notas.push(nota);
    }
    // Calcula a média
    const media = calcularMedia(notas);
    // Cria o objeto aluno
    const aluno = {
        nome: nome, // Certifique-se de que 'nome' está definido corretamente
        notas: notas,
        media: media
    };
    // Exibe o resultado no console
    console.log('\nDetalhes do aluno:');
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Notas: ${aluno.notas.join(', ')}`);
    console.log(`Média: ${aluno.media.toFixed(2)}`);
}
// Executa a função principal
main();
