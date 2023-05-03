// Não tem no js, mas em outras sim, são dados não ordenadas quando tem mais de uma escolha para algo;
// Ele atribui um valor aos elementos, sendo que começa do zero, todavia, eu posso determinar os valores
enum Cores {
  VERMELHO = 10,
  AZUL = 20,
  AMARELO = 30,
  ROXO = 'ROXO',
  //Se eu quisse continuar a partir daqui, no próximo item eu devo colocar um número para que o código o entenda.
  VERDE = 31,
  PRETO = 'PRETO',
}

// Posso fazer merge - definir outro enum com o mesmo nome e eles se juntaram quando chamar.
enum Cores {
  ROSA = 40,
  LARANJA = 'LARANJA',
  CINZA = 50,
  AMARELOCLARO = 'AMARELOCLARO',
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELOCLARO);
