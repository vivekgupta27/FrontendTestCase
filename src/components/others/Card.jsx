import React from 'react'


const Card = ({item,id,setSelecteduser,setClicked,clicked}) => {
  const handleClick=()=>{
    localStorage.setItem('selecteduser',JSON.stringify(id))
   
    setSelecteduser(id)

    console.log('clicked', id);
  }
 const detailsButton=()=>{
       setClicked({...id});
 }

  return (

    <div className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] h-[45%] bg-[#282b2d] flex flex-col items-center justify-between rounded-md overflow-hidden p-4 flex-shrink-0">
    {/* Profile Image */}
    <div className=" rounded-full overflow-hidden">
        <img 
            className="w-full h-full object-cover rounded-full" 
            src={`${item.profileImg}`} 
            alt="" 
        />
    </div>

    {/* Name */}
    <h1 className="text-xl font-semibold text-white mt-4">{item.name}</h1>

    {/* Button Section */}
    <div className="flex flex-col sm:flex-row justify-around w-full mt-3 gap-2">
        <button 
            className="px-4 py-2 bg-blue-600 rounded-md text-white text-sm sm:text-base"
            onClick={handleClick}
        >
            Address
        </button>
        <button 
            className="px-4 py-2 bg-blue-600 rounded-md text-white text-sm sm:text-base"
            onClick={detailsButton}
        >
            Details
        </button>
    </div>
</div>
  
     


  )
}

export default Card