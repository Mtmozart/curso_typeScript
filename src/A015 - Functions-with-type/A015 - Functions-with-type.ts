type MapStringCallBack = (item: string) => string;
export function mapString(
  array: string[],
  callBackFunction: MapStringCallBack,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callBackFunction(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
