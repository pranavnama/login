import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./output.css";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex md:flex-row items-center justify-center">
        <div className="mr-12 mb-8 md:mb-0 text-left">
          <h1 className="text-blue-600 text-5xl font-bold">facebook</h1>
          <p className="text-xl text-black mt-2">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email address or phone number" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Log in
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="/" className="text-blue-500 hover:underline font-bold">
              Forgotten password?
            </a>
          </div>
          <hr className="my-6" />
          <div className="text-center">
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Create new account
            </button>
          </div>
          <p className="mt-10 text-sm text-gray-500 absolute">
        <a href="/" className="text-black font-bold hover:underline">
          Create a Page
        </a>{" "}
        for a celebrity, brand, or business.
      </p>
        </div>
      </div>
    </div>

  );
};

export default Login;
