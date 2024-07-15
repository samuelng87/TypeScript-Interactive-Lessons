let ages: number[] = [100, 101]; //TypingArrays

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
};

const people: Array<Person> = [person1, person2]; //TypingArrays
const human: Person[] = [person1, person2]; //TypingArrays

console.log("TypingArrays", people);
console.log("TypingArrays", human);

const TypingArrays = () => {
  return <div>TypingArrays</div>;
};

export default TypingArrays;
