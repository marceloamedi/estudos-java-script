const hora = 18;
let saudacao;

if(hora < 12){
    saudacao = 'Bom dia!';
}else {
    if(hora < 18) {
        saudacao = 'Bpa tarde!';
    } else {
        saudacao = 'Boa noite!';
    }
}
console.log(saudacao);