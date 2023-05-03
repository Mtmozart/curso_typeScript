//casos em que a função retorna undefined e sempre que escreve funções e métodos, devo sempre ser claro na tipagem
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Matheus',
  sobrenome: 'Borges',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Mozart', 'Silva');
pessoa.exibirNome();

export { pessoa };
