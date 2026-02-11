import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex w-full items-center justify-between gap-5 px-10'>
      <div className='bg-blue-500 w-[45%] rounded-xl px-8 py-4'>
            <h2 className='text-3xl font-semibold'>1</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='bg-green-500 w-[45%] rounded-xl px-8 py-4'>
            <h2 className='text-3xl font-semibold'>3</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>
      <div className='bg-yellow-500 w-[45%] rounded-xl px-8 py-4'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
      </div>
      <div className='bg-red-500 w-[45%] rounded-xl px-8 py-4'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
