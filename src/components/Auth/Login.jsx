import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log("Email is ",email);
    console.log("Password is ",password);
    
    
    setEmail('');
    setPassword('');
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='h-screen w-screen flex items-center justify-center'>
        <form onSubmit={(e)=>{
          onSubmitHandler(e);
        }} className='border-2 border-blue-500 rounded-2xl p-20 flex flex-col gap-4'>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} required className='bg-transparent text-white text-xl border-2 border-blue-500 rounded-full px-5 py-3 placeholder:text-gray-500' type="email" placeholder='Enter your Email' />
            <input value={password} onChange={(e)=>{
              setPassword(e.target.value);
            }}  required className='bg-transparent text-white text-xl border-2 border-blue-500 rounded-full px-5 py-3 placeholder:text-gray-500' type="password" placeholder='Enter your Password'/>
            <button className='bg-blue-500 text-white text-xl mt-7 border-none rounded-full px-5 py-3 cursor-pointer active:scale-95 active:bg-blue-300'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
