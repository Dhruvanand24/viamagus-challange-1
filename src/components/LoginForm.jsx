import React, { useState } from "react";
import Amazon from "../assets/Amazon.png";
import Tree from "../assets/Tree.png";
import RedCircle from "../assets/red_circle.svg";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("The password field is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted successfully with", { email, password });
    }
  };

  return (
    <div className="w-full flex justify-center font-JF px-4">
      <div className="flex flex-col lg:min-w-[385px] mx-4 lg:w-[40%] md:w-[40%] w-[90%] sm:min-w-full rounded-md bg-white items-center">
        <div className="flex min-w-[385px] justify-center p-4 items-center shadow-lg w-full">
          <img src={Amazon} alt="Amazon Logo" className="h-8" />
        </div>
        <h1 className="text-4xl mt-6 text-[#20B716]">Login</h1>
        <div className="flex justify-center items-center mt-6">
          <img src={Tree} className="w-[385px]" alt="Tree" />
        </div>

        <form
          className="w-full px-8 mt-8 justify-center items-center flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 w-full flex justify-center items-center">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[385px] min-w-[385px] placeholder-[#20B716] border-b-2 border-gray-300 p-2 mt-2 focus:outline-none"
              placeholder="Email"
            />
          </div>
          {emailError && (
            <div className="flex w-[385px] mb-1">
              <img src={RedCircle} alt="" />
              <span className="text-[#EE2D6E] ml-2">{emailError}</span>
            </div>
          )}
          <div className="mb-1 w-full flex justify-center items-center">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[385px] min-w-[385px] placeholder-[#20B716] border-b-2 border-gray-300 p-2 mt-2 focus:outline-none"
              placeholder="Password"
            />
          </div>
          {passwordError && (
            <div className="flex w-[385px]">
              <img src={RedCircle} alt="" />
              <span className="text-[#EE2D6E] ml-2">{passwordError}</span>
            </div>
          )}
          <button
            type="submit"
            className="w-[385px] mt-4 h-12 bg-[#20B716] text-white py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="flex w-[385px] justify-between mt-4">
          <p className="cursor-pointer hover:font-semibold transition-all ease-in-out">
            Forgot Password?
          </p>
          <p className="text-[#D9185F] cursor-pointer hover:font-semibold transition-all ease-in-out">
            New User? Sign Up
          </p>
        </div>
        <p className="my-6">or</p>
        <div className="flex w-[385px] cursor-pointer transition-all ease-in-out bg-[#1877F2] hover:bg-[#4285F4] text-white text-sm h-11 relative justify-center items-center">
          CONTINUE WITH GOOGLE
          <img src={Google} className="h-full absolute p-1 left-0" alt="" />
        </div>
        <div className="flex w-[385px] cursor-pointer transition-all ease-in-out bg-[#1877F2] hover:bg-[#4285F4] text-white text-sm h-11 relative justify-center items-center mt-4">
          CONTINUE WITH FACEBOOK
          <img src={Facebook} className="h-full absolute p-1 left-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
