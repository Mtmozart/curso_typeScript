let x = 10;
x = 0b1010;
const y = 10; //tipo literal

let a = 100 as const; //em alguns locais é interressanet fazer
a = 120;
const person = {
  name: 'Matheus',
  lastName: 'Mozart',
};

person.name = 'Borges';

//posso combinar valores com tipos literais que me dá um enum
//importante lembrar que aqui são cores
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Vermelho'));

export default 1;
