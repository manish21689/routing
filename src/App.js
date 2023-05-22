import "./styles.css";
import React from "react";
import { useContext } from "react";
import { RoleContext } from "./RoleContext";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routing from "./Routing";
const App = () => {
  const { userRole } = useContext(RoleContext);
  console.log("App Page");
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {userRole === "admin" && (
            <li>
              <Link to="/adminboard">Admin</Link>
            </li>
          )}
          {userRole === "user" && (
            <li>
              <Link to="/userboard">User</Link>
            </li>
          )}
        </ul>
      </nav>
      <Routing />
    </Router>
  );
};
export default App;
