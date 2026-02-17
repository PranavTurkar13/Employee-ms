import React from 'react'

const NewTask = () => {
  return (
    <div>
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
        <button className="mt-4 w-full py-3 rounded-xl 
            bg-gradient-to-r from-yellow-500 to-yellow-500 
            hover:from-yellow-400 hover:to-yellow-400 
            text-white font-semibold 
            shadow-lg shadow-yellow-500/30 
            hover:shadow-yellow-400/40 
            transition-all duration-300 
            hover:-translate-y-1 
            active:scale-95">
             Accept Task
            </button>
      </div>
    </div>
  )
}

export default NewTask
