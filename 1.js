function soma(indice) {
    let k = 0;
    let soma = 0;

    for (let i = 0; i < indice; i++) {
        k++;
        soma += k;
    }
    return soma;
}

console.log(soma(13));
