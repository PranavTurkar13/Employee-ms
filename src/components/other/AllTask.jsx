import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className='px-8 py-6 bg-[#111] min-h-[300px] text-white'>
      
      {/* Header */}
      <div className='bg-gradient-to-r from-gray-800 to-gray-900 
      rounded-xl px-6 py-3 flex justify-between font-semibold text-gray-300 border border-gray-700'>
        <h3 className='w-1/5'>Employee</h3>
        <h3 className='w-1/5'>Task Title</h3>
        <h3 className='w-1/5'>Active</h3>
        <h3 className='w-1/5'>Completed</h3>
        <h3 className='w-1/5'>Failed</h3>
      </div>

      {/* Data Rows */}
      <div className='mt-4 flex flex-col gap-3 max-h-60 overflow-y-auto pr-2'>

        {authData.employees.map((e) =>
          e.tasks.map((task, index) => (

            <div 
              key={index}
              className='bg-gray-900 hover:bg-gray-800 
              transition-all duration-300 
              rounded-xl px-6 py-3 flex justify-between 
              border border-gray-800 shadow-md'
            >

              <h4 className='w-1/5 font-medium text-gray-200'>
                {e.name}
              </h4>

              <h4 className='w-1/5 text-gray-400'>
                {task.tasktitle}
              </h4>

              {/* Active Badge */}
              <h4 className='w-1/5'>
                {task.active && (
                  <span className='px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400'>
                    Active
                  </span>
                )}
              </h4>

              {/* Completed Badge */}
              <h4 className='w-1/5'>
                {task.completed && (
                  <span className='px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400'>
                    Done
                  </span>
                )}
              </h4>

              {/* Failed Badge */}
              <h4 className='w-1/5'>
                {task.failed && (
                  <span className='px-3 py-1 text-sm rounded-full bg-red-500/20 text-red-400'>
                    Failed
                  </span>
                )}
              </h4>

            </div>
          ))
        )}

      </div>
    </div>
  )
}

export default AllTask
