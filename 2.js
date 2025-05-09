const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(n) {
    if (n <= 1) return n;

    let a = 0, b = 1;

    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === n ? "O número " + n + " pertence à sequência de Fibonacci" : "O número " + n + " não pertence à sequência de Fibonacci";
}

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (numero) => {
    console.log(isFibonacci(parseInt(numero)));
    rl.close();
});
