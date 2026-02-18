import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
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
      {data.category}
    </span>

    <span className="text-gray-400 text-sm">
      {data.date}
    </span>
  </div>

  <h2 className="text-2xl font-semibold text-white mt-6">
    {data.tasktitle}
  </h2>

  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
    {data.taskdescription}
  </p>

  <button className="mt-6 w-full py-2 rounded-lg 
  bg-yellow-500/20 text-yellow-400 
  border border-yellow-500 
  hover:bg-yellow-500 hover:text-white 
  transition-all duration-300">
    View Details
  </button>
    <div className="mt-6 flex gap-3">

  {/* Complete Button */}
  <button className="flex-1 py-3 rounded-xl 
  bg-gradient-to-r from-green-500 to-green-500 
  hover:from-green-400 hover:to-green-400 
  text-white font-semibold 
  shadow-lg shadow-green-500/30 
  transition-all duration-300 
  hover:-translate-y-1 
  active:scale-95">
        Completed Task
    </button>

  {/* Fail Button */}
  <button className="flex-1 py-3 rounded-xl 
  bg-gradient-to-r from-red-500 to-rose-500 
  hover:from-red-400 hover:to-rose-400 
  text-white font-semibold 
  shadow-lg shadow-red-500/30 
  transition-all duration-300 
  hover:-translate-y-1 
  active:scale-95">
     Failed Task
  </button>

</div>

    </div>
    </div>
  )
}

export default AcceptTask
