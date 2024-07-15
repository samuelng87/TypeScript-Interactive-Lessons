type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; //OptionalProperties
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
  address: {
    street: "123 street",
    city: "Canberra",
    country: "Aus",
  },
};
//OptionalProperties
const displayInfo = (person: Person) => {
  console.log(
    `OptionalProperties: ${person.name} lives at ${person.address?.street}`
  );
};

displayInfo(person1);

const OptionalProperties = () => {
  return <div>OptionalProperties</div>;
};

export default OptionalProperties;
