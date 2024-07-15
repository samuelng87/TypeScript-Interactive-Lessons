type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 street",
    city: "Canberra",
    country: "Aus",
  },
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

const NestedObjectTypes = () => {
  return <div>NestedObjectTypes</div>;
};

export default NestedObjectTypes;
