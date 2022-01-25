function executar(funcao) {
    if(typeof funcao === "function") {
        console.log(funcao()); // <--- Central da Aula
    }
}

function bomDia() {
    return "Bom dia";
}

executar(3);
executar(bomDia); // <--- Central da Aula

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);