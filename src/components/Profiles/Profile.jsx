import React, { useContext, useEffect, useState } from 'react'
import Card from '../others/Card';
import ProfileContext from '../../Context/ProfileContext';
import Map from '../../ProfileonMap/Map';
import ProfileDetails from './ProfileDetails';


const Profile = ({setLoggedIn}) => {

    const {profile,setProfile}=useContext(ProfileContext)
    const[search,setSearch] = useState('')
    const[clicked,setClicked] = useState(false)
    const filteredProfiles = profile.filter(
        (profile) =>
          profile.name.toLowerCase().includes(search.toLowerCase()) ||
          profile.city.toLowerCase().includes(search.toLowerCase())
      );
      const handleLogout=()=>{
       localStorage.removeItem('loggedIn');
       setLoggedIn(null);
      }
      const [selecteduser,setSelecteduser]=useState(null)
      useEffect(()=>{
        const user=localStorage.getItem('selecteduser')
        if(user){
          setSelecteduser(JSON.parse(user))
        }
      },[])
    
  return (
    <div className={`bg-[#1c1c1c] w-full h-screen p-4 flex flex-col items-center `}>
    {/* <div className='flex justify-between w-full'>
     <h1 className='text-2xl text-white '>Hello users,👋</h1>
    <input type="text" className='w-[50%] p-2 rounded-full bg-transparent border-2 border-white outline-none text-white ' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
     <button className='px-2 py-1 bg-red-600 text-white font-medium text-xl rounded-md' onClick={handleLogout}>Logout</button>
     
    </div> */}
    <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
    {/* Greeting Message */}
    <h1 className="text-2xl text-white sm:text-3xl">
        Hello users,👋
    </h1>
    
    {/* Search Input */}
    <input 
        type="text" 
        className="w-full sm:w-[50%] p-2 rounded-full bg-transparent border-2 border-white outline-none text-white placeholder-gray-400"
        placeholder="Search" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
    />
    
    {/* Logout Button */}
    <button 
        className="px-4 py-2 bg-red-600 text-white font-medium text-lg sm:text-xl rounded-md mt-4 sm:mt-0"
        onClick={handleLogout}
    >
        Logout
    </button>
</div>

     <div className='w-full h-full  mt-5 flex justify-center flex-wrap gap-4 overflow-y-auto'>

        {clicked?<ProfileDetails clicked={clicked} setClicked={setClicked}/>:selecteduser?<Map setSelecteduser={setSelecteduser} selecteduser={selecteduser} />:filteredProfiles.length>0 ? filteredProfiles.map((item,index)=> <Card key={index} clicked={clicked} setClicked={setClicked} setSelecteduser={setSelecteduser} item={item} id={item}/>):<p className=" text-xl font-semibold text-white">No profiles found</p>}
       

     </div>
     
 </div>

  )
}

export default Profile