import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Email is ", email);
    console.log("Password is ", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      <form
        onSubmit={onSubmitHandler}
        className="w-[400px] bg-gray-900/60 backdrop-blur-lg border border-gray-700 rounded-3xl p-10 flex flex-col gap-6 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-blue-400">
          Welcome Back
        </h2>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          placeholder="Enter your Email"
          className="w-full bg-gray-800 text-white text-lg border border-gray-600 rounded-xl px-5 py-3 
          placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          transition duration-200"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          placeholder="Enter your Password"
          className="w-full bg-gray-800 text-white text-lg border border-gray-600 rounded-xl px-5 py-3 
          placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          transition duration-200"
        />

        <button
          className="w-full py-3 rounded-xl text-lg font-semibold 
          bg-gradient-to-r from-blue-500 to-indigo-500 
          hover:from-blue-400 hover:to-indigo-400 
          transition-all duration-300 
          shadow-lg hover:shadow-blue-500/40 
          active:scale-95"
        >
          Log In
        </button>

        <p className="text-gray-400 text-sm text-center">
          Don't have an account? <span className="text-blue-400 cursor-pointer hover:underline">Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
