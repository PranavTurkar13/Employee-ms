import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex gap-6 h-[60%] overflow-x-auto py-10 px-6 scroll-smooth"
    >
      {/* Task Card */}
      <div className="min-w-[320px] max-w-[350px] shrink-0 
      bg-gray-800/70 backdrop-blur-md 
      border border-gray-700 
      rounded-2xl p-6 
      hover:border-blue-500 
      hover:shadow-lg hover:shadow-emerald-500/20 
      transition-all duration-300">

        <div className="flex items-center justify-between">
          <span className="bg-blue-500/20 text-blue-400 
          border border-blue-500 
          px-3 py-1 text-sm rounded-full font-medium">
            High
          </span>

          <span className="text-gray-400 text-sm">
            20 Feb 2024
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-white mt-6">
          Make a YouTube Video
        </h2>

        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          Create a high-quality UI tutorial video explaining modern dashboard
          design using Tailwind CSS and React.
        </p>

        <button className="mt-6 w-full py-2 rounded-lg 
        bg-blue-500/20 text-blue-400 
        border border-blue-500 
        hover:bg-blue-500 hover:text-white 
        transition-all duration-300">
          View Details
        </button>

      </div>

      {/* Duplicate cards below */}
      <div className="min-w-[320px] max-w-[350px] shrink-0 
      bg-gray-800/70 backdrop-blur-md 
      border border-gray-700 
      rounded-2xl p-6 
      hover:border-emerald-500 
      hover:shadow-lg hover:shadow-blue-500/20 
      transition-all duration-300">

        <div className="flex items-center justify-between">
          <span className="bg-emerald-500/20 text-emerald-400 
          border border-emerald-500 
          px-3 py-1 text-sm rounded-full font-medium">
            Medium
          </span>

          <span className="text-gray-400 text-sm">
            21 Feb 2024
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-white mt-6">
          Update Landing Page
        </h2>

        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          Improve hero section UI and add animation using Tailwind and Framer Motion.
        </p>

        <button className="mt-6 w-full py-2 rounded-lg 
        bg-emerald-500/20 text-emerald-400 
        border border-emerald-500 
        hover:bg-emerald-500 hover:text-white 
        transition-all duration-300">
          View Details
        </button>

      </div>
      <div className="min-w-[320px] max-w-[350px] shrink-0 
bg-gray-800/70 backdrop-blur-md 
border border-gray-700 
rounded-2xl p-6 
hover:border-yellow-500 
hover:shadow-lg hover:shadow-yellow-500/20 
transition-all duration-300">

  <div className="flex items-center justify-between">
    <span className="bg-yellow-500/20 text-yellow-400 
    border border-yellow-500 
    px-3 py-1 text-sm rounded-full font-medium">
      Low
    </span>

    <span className="text-gray-400 text-sm">
      22 Feb 2024
    </span>
  </div>

  <h2 className="text-2xl font-semibold text-white mt-6">
    Fix Minor UI Bugs
  </h2>

  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
    Resolve small alignment and spacing issues in the dashboard interface.
  </p>

  <button className="mt-6 w-full py-2 rounded-lg 
  bg-yellow-500/20 text-yellow-400 
  border border-yellow-500 
  hover:bg-yellow-500 hover:text-white 
  transition-all duration-300">
    View Details
  </button>

</div>

<div className="min-w-[320px] max-w-[350px] shrink-0 
bg-gray-800/70 backdrop-blur-md 
border border-gray-700 
rounded-2xl p-6 
hover:border-red-500 
hover:shadow-lg hover:shadow-red-500/20 
transition-all duration-300">

  <div className="flex items-center justify-between">
    <span className="bg-red-500/20 text-red-400 
    border border-red-500 
    px-3 py-1 text-sm rounded-full font-medium">
      Critical
    </span>

    <span className="text-gray-400 text-sm">
      23 Feb 2024
    </span>
  </div>

  <h2 className="text-2xl font-semibold text-white mt-6">
    Fix Authentication Issue
  </h2>

  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
    Resolve login authentication bug causing users to be logged out unexpectedly.
  </p>

  <button className="mt-6 w-full py-2 rounded-lg 
  bg-red-500/20 text-red-400 
  border border-red-500 
  hover:bg-red-500 hover:text-white 
  transition-all duration-300">
    View Details
  </button>

</div>

    </div>
  );
};

export default TaskList;
