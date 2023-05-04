// pai de todos os outros tipo e funciona como any só que mais seguro
// é bom para coisas que não sei o que será

let x: unknown;
x = 100;
x = 'matheus';
x = 900;
x = '10';
const y = 800;

if(typeof === 'number')console.log(x + y);


