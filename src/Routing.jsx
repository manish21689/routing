import React from "react";
import { useContext } from "react";
import { RoleContext } from "./RoleContext";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminBoard from "./AdminBoard";
import UserBoard from "./UserBoard";
import Login from "./Login";
import Product from "./Product";
const Routing = () => {
  const { userRole } = useContext(RoleContext);
  console.log("Routing");
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      {userRole === "admin" && (
        <Route path="/adminboard" element={<AdminBoard />} />
      )}
      {(userRole === "user" || userRole === "admin") && (
        <Route path="/userboard" element={<UserBoard />} />
      )}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Routing;
