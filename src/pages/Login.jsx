import React from "react";
import Tree from "../assets/Tree.png";
import Banner from "../assets/banner.png";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col w-screen relative">
      <div className="">
        <img src={Banner} className="w-screen  sm:max-w-full" alt="" />
      </div>
      <div className="absolute px-4 h-full mt-32">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
