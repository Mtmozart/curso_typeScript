// & interseção entre dois conjuntos ou and

//seguindo o princípio da interceção de interfaces, eu busco criar interfaces mais exutas
//criar tipos pequenos pode ser bom para reutilização
type HaveName = { name: string };
type HaveLatName = { lastName: string };
type HaveAge = { age: number };

//combino para realizar outros tipos
type Person = HaveName & HaveLatName & HaveAge;

//imaginar tipos como conjuntos -- Professor não ver tanto uso
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

export const person: Person = {
  age: 30,
  name: 'Matheus',
  lastName: 'Borges',
};

console.log(person);
