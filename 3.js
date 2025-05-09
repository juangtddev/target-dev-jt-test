const fs = require('fs');


function analisarFaturamento(caminhoArquivo) {
    try {
        const dados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf8'));

        const diasComFaturamento = dados.filter(dia => dia.valor > 0);

        const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));

        const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

        const mediaMensal = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0) / diasComFaturamento.length;


        const diasAcimaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

        return {
            menorValor,
            maiorValor,
            mediaMensal,
            diasAcimaMedia
        };
    } catch (erro) {
        console.error('Erro ao processar o arquivo:', erro.message);
        return null;
    }
}


const resultado = analisarFaturamento('dados.json');
if (resultado) {
    console.log('Análise de Faturamento:');
    console.log(`Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`);
    console.log(`Média mensal: R$ ${resultado.mediaMensal.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${resultado.diasAcimaMedia}`);
}
