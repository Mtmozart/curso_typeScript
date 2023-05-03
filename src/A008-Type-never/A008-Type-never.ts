//representa um não valor e diz que aquele método nunca retornará nada, sendo em laço infinito ou erro.

export function criarErro(): never {
  throw new Error('Deu ruim');
}

criarErro;
