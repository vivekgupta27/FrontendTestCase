import React from 'react'

const Header = ({setLoggedIn}) => {
    const handleClick = () => {
        setLoggedIn(null);
        localStorage.removeItem('loggedIn');
    }

   //...rest of the component code here...
  return (
    
    <div 
    className="flex flex-col md:flex-row justify-between items-start md:items-end p-5 gap-4">
    {/* Greeting Section */}
    <h1 className="text-2xl text-white">
        Hello, <br /> 
        <span className="text-3xl">Admin 👋</span>
    </h1>

    {/* Logout Button */}
    <button 
        onClick={handleClick} 
        className="bg-red-700 py-2 px-5 font-semibold rounded-md text-white 
                   hover:bg-red-800 transition-all duration-300">
        Logout
    </button>
</div>

    
  )
}

export default Header