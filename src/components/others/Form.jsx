import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useState,useEffect } from 'react';
import ProfileContext from '../../Context/ProfileContext';


const Form = () => {
 const {profile,setProfile}= useContext(ProfileContext)
    const { register, handleSubmit,reset } = useForm();
    const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [Error, setError] = useState(null);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError("Unable to retrieve location. Please enable location services.");
          alert(Error)
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      alert(Error)
    }
  }, []); // Empty dependency array ensures this runs only once on mount
  const onSumbit=(data)=>{

    const Data={...data,...location}
    const newData=[...profile]
    newData.push(Data);
    setProfile(newData);
    localStorage.setItem('profiles',JSON.stringify(newData))
    reset()
  }
  return (
    <div className="p-3">
    <form 
        className="mt-5 flex flex-col gap-5 md:flex-row md:justify-between" 
        onSubmit={handleSubmit(onSumbit)}
    >
        {/* Left Column */}
        <div className="w-full md:w-[45%] flex flex-col gap-3">
            <h3 className="font-semibold text-white">Name</h3>
            <input 
                {...register('name')} 
                className="p-2 text-white bg-transparent border border-gray-500 outline-none rounded-sm" 
                type="text" 
                placeholder="Vivek Gupta" 
            />
            
            <h3 className="font-semibold text-white">Profile Picture</h3>
            <input 
                {...register('profileImg')} 
                className="p-2 text-white bg-transparent border border-gray-500 outline-none rounded-sm" 
                type="text" 
                placeholder="Picture link" 
            />
            
            <h3 className="font-semibold text-white">City</h3>
            <input 
                {...register('city')} 
                className="p-2 text-white bg-transparent border border-gray-500 outline-none rounded-sm" 
                type="text" 
                placeholder="Mumbai" 
            />
        </div>
        
        {/* Right Column */}
        <div className="w-full md:w-[45%] flex flex-col gap-3">
            <h3 className="font-semibold text-white">Description</h3>
            <textarea 
                {...register('description')} 
                className="p-2 text-white bg-transparent border border-gray-500 outline-none rounded-sm resize-none h-32" 
                placeholder="Add description here" 
            />
            
            <button 
                className="p-2 bg-green-500 font-semibold text-white rounded-md hover:bg-green-600 transition-all duration-300" 
                type="submit"
            >
                Create Task
            </button>
        </div>
    </form>
</div>

  )
}

export default Form