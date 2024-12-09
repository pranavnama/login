// import './App.css';
// import React from 'react';
// import './output.css';

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center mb-8">

//       </div>
//     </div>
    
//   );
// }

// export default App;


import React from "react";
import logo from './logo.svg';  // Import your logo if placed in the src folder
import './output.css';
import "./index.css";


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Facebook Logo and Tagline */}
      <div className="text-center mb-8">
        {/* Logo Image */}
        <img src={logo} alt="Facebook Logo" className="w-20 h-20 mx-auto mb-4" />
        
        {/* Tagline */}
        <h1 className="text-blue-600 text-5xl font-bold">facebook</h1>
        <p className="text-lg text-gray-600 mt-2">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <form>
          <input
            type="text"
            placeholder="Email address or phone number"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="/" className="text-blue-500 hover:underline">
            Forgotten password?
          </a>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Create new account
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-500">
        <a href="/" className="hover:underline">
          Create a Page
        </a>{" "}
        for a celebrity, brand, or business.
      </p>
    </div>


  );
}

export default App;
