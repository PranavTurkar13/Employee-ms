import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between 
    bg-gray-900/70 backdrop-blur-md 
    border-b border-gray-800 
    px-10 py-6 text-white">

      <h1 className="text-lg text-gray-400">
        Hello,
        <br />
        <span className="text-3xl font-bold text-white">
          Pranav 👋
        </span>
      </h1>

      <button className="px-6 py-2.5 rounded-xl 
      bg-gradient-to-r from-red-500 to-rose-500 
      hover:from-red-400 hover:to-rose-400 
      transition-all duration-300 
      font-semibold 
      shadow-lg hover:shadow-red-500/30 
      active:scale-95">
        Log Out
      </button>

    </div>
  );
};

export default Header;
