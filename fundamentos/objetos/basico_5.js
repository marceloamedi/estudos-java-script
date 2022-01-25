const cliente = {
    codigo: 16532,
    nome: 'Marcelo',
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            'Hospital X',
            'Shopping y',
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1]);
