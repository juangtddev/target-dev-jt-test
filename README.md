# Target Sistemas - Desafio de Desenvolvimento

Este repositório contém as soluções para os desafios de desenvolvimento propostos pela Target Sistemas.

## 📋 Desafios

### 1. Cálculo de Soma (`1.js`)

**Enunciado:**

```
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
Imprimir(SOMA);
```

**Solução:**

- Implementação do algoritmo em JavaScript
- Calcula a soma dos números de 1 a 13
- Resultado: 91

### 2. Sequência de Fibonacci (`2.js`)

**Enunciado:**
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa que, informado um número, calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

**Solução:**

- Programa interativo que recebe um número do usuário
- Verifica se o número pertence à sequência de Fibonacci
- Exibe mensagem informando se o número pertence ou não à sequência

### 3. Análise de Faturamento Diário (`3.js`)

**Enunciado:**
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês
- O maior valor de faturamento ocorrido em um dia do mês
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal

**Solução:**

- Lê dados de faturamento de um arquivo JSON
- Ignora dias sem faturamento no cálculo da média
- Calcula e exibe as estatísticas solicitadas

### 4. Análise de Faturamento por Estado (`4.js`)

**Enunciado:**
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

- SP – R$67.836,43
- RJ – R$36.678,66
- MG – R$29.229,88
- ES – R$27.165,48
- Outros – R$19.849,53

Calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Solução:**

- Calcula o valor total do faturamento
- Calcula e exibe o percentual de cada estado
- Formata os resultados com 2 casas decimais

### 5. Inversão de String (`5.js`)

**Enunciado:**
Escreva um programa que inverta os caracteres de uma string.

**Solução:**

- Programa interativo que recebe uma string do usuário
- Inverte os caracteres sem usar funções prontas
- Exibe o resultado da inversão

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (versão 12 ou superior)

### Executando os Programas

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/target-dev-jt-test.git
cd target-dev-jt-test
```

2. Execute cada programa individualmente:

Para o cálculo de soma:

```bash
node 1.js
```

Para a verificação de Fibonacci:

```bash
node 2.js
```

Para a análise de faturamento diário:

```bash
node 3.js
```

Para a análise de faturamento por estado:

```bash
node 4.js
```

Para a inversão de string:

```bash
node 5.js
```

## 📝 Estrutura do Projeto

```
target-dev-jt-test/
├── 1.js          # Cálculo de soma
├── 2.js          # Verificação de Fibonacci
├── 3.js          # Análise de faturamento diário
├── 4.js          # Análise de faturamento por estado
├── 5.js          # Inversão de string
├── dados.json    # Dados de faturamento
└── README.md     # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Node.js
- JSON (para manipulação de dados)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

- Juan Daniel Bezerra Jorge - [juangtddev](https://github.com/juangtddev)

## 📞 Suporte

Em caso de dúvidas ou problemas, abra uma issue neste repositório.
