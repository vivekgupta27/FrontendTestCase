import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        handleLogin(email,password);
        setemail('');
        setpassword('');
    }
  return (
  
  <div className="w-full h-screen flex justify-center items-center">
    <div 
        className="bg-[#1d1b1b] rounded-md p-6 flex flex-col gap-8 
                   w-[90%] max-w-sm md:w-[50%] lg:w-[25%] 
                   h-[85%] md:h-[75%]">
        <h1 className="text-3xl text-white font-bold text-center">Log In</h1>
        <form onSubmit={handleFormSubmit} className="bg-transparent flex flex-col gap-5">
            <input 
                required 
                className="bg-[#1d1b1b] text-white px-3 py-2 border border-red-700 outline-none 
                           w-full rounded-full placeholder:text-gray-400 focus:border-red-500" 
                placeholder="Username" 
                type="email" 
                value={email} 
                onChange={(e) => setemail(e.target.value)} 
            />
            <input 
                required 
                className="bg-[#1d1b1b] text-white px-3 py-2 border border-red-700 outline-none 
                           w-full rounded-full placeholder:text-gray-400 focus:border-red-500" 
                placeholder="Password" 
                type="password" 
                value={password} 
                onChange={(e) => setpassword(e.target.value)} 
            />
            <button 
                className="bg-red-500 px-3 py-2 font-semibold text-white rounded-full 
                           hover:bg-red-600 transition-all duration-300">
                Log in
            </button>
        </form>
    </div>
</div>

  )
}

export default Login