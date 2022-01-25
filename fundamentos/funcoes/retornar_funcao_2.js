function retornaUmaFuncao() {
    return function () {
        return "Boa Noite!";
    }
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());