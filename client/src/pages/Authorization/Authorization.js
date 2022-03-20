import React from "react";
import Login from "../../components/Authorization/Login/Login";
import Signup from "../../components/Authorization/Signup/Signup";
import "./Authorization.css";

const Authorization = () => {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
};

export default Authorization;
