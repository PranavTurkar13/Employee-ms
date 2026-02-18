import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  
  if (!userData) return null;
  return (
    <div className='px-8 py-6 bg-[#111] min-h-[250px] text-white'>
      
      {/* Header */}
      <div className='bg-gradient-to-r from-gray-800 to-gray-900 
      rounded-xl px-6 py-3 flex justify-between 
      font-semibold text-gray-300 border border-gray-700'>
        
        <h3 className='w-1/5'>Employee</h3>
        <h3 className='w-1/5 text-yellow-400'>New</h3>
        <h3 className='w-1/5 text-blue-400'>Active</h3>
        <h3 className='w-1/5 text-green-400'>Completed</h3>
        <h3 className='w-1/5 text-red-400'>Failed</h3>
      </div>

      {/* Data Rows */}
      <div className='mt-4 flex flex-col gap-3 max-h-60 overflow-y-auto pr-2'>

        {userData.map((e, index) => (

          <div 
            key={index}
            className='bg-gray-900 hover:bg-gray-800 
            transition-all duration-300 
            rounded-xl px-6 py-4 flex justify-between 
            border border-gray-800 shadow-md'
          >

            <h4 className='w-1/5 font-medium text-gray-200'>
              {e.name}
            </h4>

            {/* New Task */}
            <h4 className='w-1/5'>
              <span className='px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm'>
                {e.taskCounts.newtask}
              </span>
            </h4>

            {/* Active */}
            <h4 className='w-1/5'>
              <span className='px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm'>
                {e.taskCounts.active}
              </span>
            </h4>

            {/* Completed */}
            <h4 className='w-1/5'>
              <span className='px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm'>
                {e.taskCounts.completed}
              </span>
            </h4>

            {/* Failed */}
            <h4 className='w-1/5'>
              <span className='px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm'>
                {e.taskCounts.failed}
              </span>
            </h4>

          </div>

        ))}

      </div>
    </div>
  )
}

export default AllTask
