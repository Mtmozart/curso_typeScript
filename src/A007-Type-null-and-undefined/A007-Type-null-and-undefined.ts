let x;
//trandormação de tipos
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createdPerson(
  firtName: string,
  lastName?: string,
): {
  firtName: string;
  lastName?: string;
} {
  return {
    firtName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOftwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOftwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOftwoNumber);
}
