import React from 'react'

const FailedTask = () => {
  return (
    <div>
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
    <button className="mt-6 w-full py-3 rounded-xl 
        bg-gradient-to-r from-blue-500 to-blue-500 
        hover:from-blue-400 hover:to-blue-400 
        text-white font-semibold 
        shadow-lg shadow-blue-500/30 
        transition-all duration-300 
        hover:-translate-y-1 
        active:scale-95">
        🔄 Reopen Task
        </button>

</div>
    </div>
  )
}

export default FailedTask
