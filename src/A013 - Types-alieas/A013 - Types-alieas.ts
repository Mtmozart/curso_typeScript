//posso usa o type e dá um tipo dele - nesse caso são protocolos e contratos
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type corRGB = 'Vemelho' | 'Verde' | 'Azul';

type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type corPreferida = corRGB | corCMYK;

const pessoa: Pessoa = {
  idade: 24,
  nome: 'Matheus',
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa));
console.log(setCorPreferida(pessoa, 'Amarelo'));
