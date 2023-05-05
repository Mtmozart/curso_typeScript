//Classes também funcionam como tipo, ou seja, se eu tiver uma classe ela será um tipo - redundante
/*Forma longa */
export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaboradores[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  //Método público que adiciona o colaborador
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  /*Método curto */
  constructor(
    public readonly nome: string,
    public readonly sobreNome: string,
  ) {}
}

const empresa1 = new Empresa('Billion', '0000.0000./0001-00');
const colaborador1 = new Colaborador('Matheus', 'Mozart');
const colaborador2 = new Colaborador('Raquel', 'Aguilera');
const colaborador3 = new Colaborador('Raimunda', 'Trindade');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
//console.log(empresa1);
empresa1.showColaboradores();
