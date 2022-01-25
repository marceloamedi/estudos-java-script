// Objeto data
// Atributos: dia,mes e ano
// Método: exibir -> "dia/mes/ano"

const nascimento = {
    dia: 25,
    mes: 09,
    ano: 1987,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(nascimento.exibir());