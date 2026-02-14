import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className='bg-gray-900/60 backdrop-blur-md shadow-2xl border border-gray-700 m-10 rounded-2xl p-8'>
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">
          Create New Task
        </h2>
        <form className='flex flex-col lg:flex-row gap-8'>
            <div className='w-1/2 p-5'>
              <div className='p-2'>
                <h3 className='text-xl text-gray-300'>Task Title</h3>
                <input className='w-full p-3 rounded-lg 
                bg-gray-800 border border-gray-600 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 
                focus:border-emerald-500 transition duration-200' type="text" placeholder='Make UI Design'/>
            </div>
            <div className='p-2'>
                <h3 className='text-xl text-gray-300'>Date</h3>
                <input className='w-full p-3 rounded-lg 
              bg-gray-800 border border-gray-600 
              placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 
              focus:border-emerald-500 transition duration-200' type="date" />
            </div>
            <div className='p-2'>
                <h3 className='text-xl text-gray-300'>Assign to</h3>
                <input className='w-full p-3 rounded-lg 
                bg-gray-800 border border-gray-600 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 
                focus:border-emerald-500 transition duration-200' type="text" placeholder='Employee name'/>
            </div>
            <div className='p-2'>
                <h3 className='text-xl text-gray-300'>Category</h3>
                <input className='w-full p-3 rounded-lg 
              bg-gray-800 border border-gray-600 
              placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 
              focus:border-emerald-500 transition duration-200' type="text" placeholder='design, dev etc'/>
            </div>
            </div>
            <div className='w-1/2 p-5'>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Description</label>
                <textarea className='border-2 p-2 w-full rounded-lg border-gray-600 bg-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 
                focus:border-emerald-500 transition duration-200' name="" id=""rows={9} cols={73}></textarea>
                <button className='w-full mt-4 py-3 rounded-xl 
                bg-gradient-to-r from-emerald-500 to-teal-500 
                hover:from-emerald-400 hover:to-teal-400 
                transition-all duration-300 
                font-semibold text-lg 
                shadow-lg hover:shadow-emerald-500/40 
                active:scale-95'>create Task</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
