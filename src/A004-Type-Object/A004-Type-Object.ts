//fORMA MAIS SEGURA - É MELHOR MELHORAR E CRIAR DE UMA VEZ OU USO UMA INDEX SIGNATURE
//readonly - não deixa achave ser alterada
//Tipagem do objeto
const objetoA: {
  readonly chaveA: string;
  chabeB: string;
  chaveC?: string;
  //quando n sei o tipo de chave;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'Valor B',
};
//posso alterar o valor da chave
objetoA.chaveA = 'Outro valor';
//Mas não posso adicionar uma nova, pois, uma vez auferido o tipo eu não posso mais alterar;
//objetoA.chaveC = 'Nova chave';
//objetoA.chaveD = 'Nova chave';
console.log(objetoA);
