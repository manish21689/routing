import { createContext, useState } from "react";
export const RoleContext = createContext();
export function RoleContextProvider({ children }) {
  console.log("RoleContext");
  const [userRole, setUserRole] = useState(localStorage.getItem("ROLE" || ""));
  const onLogin = (e, role) => {
    e.preventDefault();
    localStorage.setItem("ROLE", role);
    setUserRole(role);
    if (role === "admin" || role === "user") {
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }
  };
  return (
    <RoleContext.Provider value={{ userRole, setUserRole, onLogin }}>
      {children}
    </RoleContext.Provider>
  );
}
