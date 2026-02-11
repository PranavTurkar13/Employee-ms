import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between text-white p-10'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>Pranav 👋</span></h1>
      <button className='bg-red-500 px-5 py-3 text-lg font-medium rounded-2xl'>Log Out</button>
    </div>
  )
}

export default Header
