function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto){
    if(retornaTexto) {
        return "Sou um texto!";
    }
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));