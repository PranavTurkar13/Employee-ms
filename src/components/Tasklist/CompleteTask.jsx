import React from 'react'

const CompleteTask = () => {
  return (
    <div>
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
        <button className="mt-4 w-full py-3 rounded-xl 
            bg-gradient-to-r from-emerald-500 to-green-500 
            hover:from-emerald-400 hover:to-green-400 
            text-white font-semibold 
            shadow-lg shadow-emerald-500/30 
            hover:shadow-emerald-400/40 
            transition-all duration-300 
            hover:-translate-y-1 
            active:scale-95">
             Mark as Completed
            </button>
      </div>
    </div>
  )
}

export default CompleteTask
