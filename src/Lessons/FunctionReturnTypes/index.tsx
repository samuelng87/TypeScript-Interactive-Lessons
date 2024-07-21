type UserRole = "guest" | "member" | "admin";

type User = {
  username: String;
  role: UserRole;
};

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];
const fetchUserDetails = (username: string): User => {
  //FunctionReturnTypes
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
};

console.log(fetchUserDetails("john_doe"));
const FunctionReturnTypes = () => {
  return <div>FunctionReturnTypes</div>;
};

export default FunctionReturnTypes;
