// basicamente eu faço um typecasting, ex: se eu estivesse com dom e trabalha-lho
//recomendado
//condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

//Type assertion - só faz quando tiver certeza
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
//Html element
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

//posso selecionar qualquer elemento, pois ele é elemento ou nulo

//Não recomendado
const body4 = document.querySelector('body') as unknown as number;

//non null assetion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
