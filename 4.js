
const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

function calcularPercentuais(faturamento) {

    const valorTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);


    const percentuais = {};

    for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = (valor / valorTotal) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }

    return percentuais;
}


const resultado = calcularPercentuais(faturamentoPorEstado);


console.log('Percentual de representação por estado:');
console.log('----------------------------------------');
for (const [estado, percentual] of Object.entries(resultado)) {
    console.log(`${estado}: ${percentual}%`);
}
