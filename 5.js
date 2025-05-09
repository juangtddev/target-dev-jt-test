const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(texto) {
    let resultado = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }
    return resultado;
}

rl.question('Digite o texto que deseja inverter: ', (textoOriginal) => {
    const textoInvertido = inverterString(textoOriginal);
    console.log(`\nTexto original: ${textoOriginal}`);
    console.log(`Texto invertido: ${textoInvertido}`);
    rl.close();
});
