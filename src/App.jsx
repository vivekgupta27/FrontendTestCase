import { useEffect, useState } from 'react'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Profile from './components/Profiles/Profile'


function App() {
 
  const [loggedIn,setLoggedIn]=useState(null)
  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedIn')
    if(loggedInUser){
      setLoggedIn(loggedInUser)
    }else{
      setLoggedIn(null)
    }
  },[])
  const handleLogin = (email,password)=>{
    if(email=="admin@example.com"&&password=="123"){
      console.log("admin")
      setLoggedIn('admin')
      localStorage.setItem('loggedIn',"admin")
    }
    else if(email=="user@example.com"&&password=="123"){
      console.log("user")
      setLoggedIn('user')
      localStorage.setItem('loggedIn',"user")
    }
    else{
      alert("Invalid Credentials")
    }
}
  return (
  

   <div className='bg-[#1e2021]'>
     {loggedIn===null?<Login handleLogin={handleLogin}/>:''} 
     {loggedIn=='admin'? <AdminDashboard setLoggedIn={setLoggedIn}/>: ''}
        {loggedIn=='user'?<Profile setLoggedIn={setLoggedIn}/>:''} 
   </div>
            

  )
}

export default App
