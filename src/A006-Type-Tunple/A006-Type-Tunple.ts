// array com tpos e tamanho específicos. posso ter vários mas devo colocar o tipo na definição do array
//posso adicionar ou remover valores com push
//posso usar o rest operator para falar que posso te um resto de coisas como string ou number;
const dadosClientes1: readonly [number, string] = [1, 'Matheus'];
const dadosClientes2: [number, string, string] = [1, 'Matheus', 'Mozart'];
const dadosClientes3: [number, string, string?] = [1, 'Matheus'];
const dadosClientes4: [number, string, ...string[]] = [1, 'nome', 'sobrenome'];
/*dadosClientes1[0] = 100;
dadosClientes1[1] = 'Mozart';
dadosClientes1.pop() - pode ser usado para apagar o elemento do array sem que o ts note, para resolver, uso o readonly;*/
console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);
