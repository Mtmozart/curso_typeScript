/* eslint-disable*/
let nome: string = 'Matheus Mozart';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer coisa');
//let big: bigint = 10n;

// Arrays e objetos
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['a','b','c'];
let arrayDeStrings: string[] = ['a','b','c'];

//objetos
//interrogação é opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Matheus',
  idade: 24,
}

//funções
function soma(x: number, y:number): number{
  return x + y
}
const result = soma(2, 2);
const soma2: (x: number, y:number) => number =(x, y) => x + y;
