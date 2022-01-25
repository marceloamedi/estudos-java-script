const hora = 23;
let saudacao;

if(hora < 12) {
    saudacao = 'Bom Dia!';
}else if(hora < 18) {
    saudacao = 'Boa tarde!';
}else if(hora < 22) {
    saudacao = 'Boa Noite!';
}else {
    saudacao = 'Boa Madruga';
}
console.log(saudacao);