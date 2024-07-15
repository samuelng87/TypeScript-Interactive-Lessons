// Combine Concept: Literal Types and Unions

type User = {
  username: string;
  role: "guest" | "member" | "admin";
};

type UserRole = "guest" | "member" | "admin";
let userRole: UserRole = "member";

const Unions = () => {
  return <div>Unions</div>;
};

export default Unions;
