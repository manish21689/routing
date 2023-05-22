import { useContext } from "react";
import { RoleContext } from "./RoleContext";
const Home = () => {
  const { userRole } = useContext(RoleContext);
  console.log("Home");
  return (
    <h2>
      Home Page{" "}
      {userRole === "admin" || userRole === "user" ? userRole : "Regular User"}{" "}
    </h2>
  );
};
export default Home;
