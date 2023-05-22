import { useContext } from "react";
import { RoleContext } from "./RoleContext";
import { useState } from "react";

const Login = () => {
  const [role, setRole] = useState(localStorage.getItem("ROLE" || ""));
  const { onLogin } = useContext(RoleContext);
  console.log("Login");
  /*  const { setUserRole, userRole,onLogin } = useContext(RoleContext);
  const onLogin = (e) => {
    e.preventDefault();
    setUserRole(role);
    localStorage.setItem("ROLE", role);
  }; */
  return (
    <div>
      <form onSubmit={(e) => onLogin(e, role)}>
        <h2>Login Role is {role}</h2>
        <input type="text" onChange={(e) => setRole(e.target.value)} />
        <br />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};
export default Login;
