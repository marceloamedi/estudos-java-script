const d1 = {
    dia: 25,
    mes: 09,
    ano: 1987,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 24,
    mes: 08,
    ano: 1988,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};


const d3 = {
    dia: 29,
    mes: 11,
    ano: 2021,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());