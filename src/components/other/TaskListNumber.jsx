import React from "react";

const TaskListNumber = () => {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 
        rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 
        hover:border-blue-500 transition-all duration-300">

          <h2 className="text-4xl font-bold text-blue-400">1</h2>
          <p className="text-gray-400 mt-2 text-lg">New Task</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 
        rounded-2xl p-6 shadow-lg hover:shadow-green-500/20 
        hover:border-green-500 transition-all duration-300">

          <h2 className="text-4xl font-bold text-green-400">3</h2>
          <p className="text-gray-400 mt-2 text-lg">Completed Task</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 
        rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/20 
        hover:border-yellow-500 transition-all duration-300">

          <h2 className="text-4xl font-bold text-yellow-400">0</h2>
          <p className="text-gray-400 mt-2 text-lg">Accepted Task</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 
        rounded-2xl p-6 shadow-lg hover:shadow-red-500/20 
        hover:border-red-500 transition-all duration-300">

          <h2 className="text-4xl font-bold text-red-400">0</h2>
          <p className="text-gray-400 mt-2 text-lg">Failed Task</p>
        </div>

      </div>
    </div>
  );
};

export default TaskListNumber;
