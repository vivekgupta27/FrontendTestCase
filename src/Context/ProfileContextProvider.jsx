import React from 'react'
import { useEffect } from 'react'
import ProfileContext from './ProfileContext'
import { setLocalStorage,getLocalStorage } from '../utlis/Localstorage'
const ProfileContextProvider = ({children}) => {
    const [profile, setProfile] = React.useState(null)
    
    useEffect(() => {
       
       const data=getLocalStorage();
        if(data){
          return  setProfile(data)
        }
        setLocalStorage();
       setProfile(data)
    },[])
  return (
    <ProfileContext.Provider value={{profile,setProfile}}>
        {children}
    </ProfileContext.Provider>
  )
}

export default ProfileContextProvider