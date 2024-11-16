import React from 'react'

const ProfileDetails = ({clicked,setClicked}) => {
    const handleClick = (e) =>{
        setClicked(false);
  
    }
 
  return (
    <div className='className="profile-details bg-white shadow-lg p-4 rounded-lg  w-full h-fit '>
        <button className='p-2 rounded  bg-blue-500'onClick={handleClick} >Back</button>
            <div className="image-container mb-4">
                <img 
                    src={clicked.profileImg} 
                    alt={`${clicked.name}'s avatar`} 
                    className="w-32 h-32 rounded-full mx-auto"
                />
            </div>

              {/* User Name and Location */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold">{clicked.name}</h2>
                <p className="text-gray-500">{clicked.city}</p>
            </div>


            {/* Description */}
            <div className="description mb-4">
                <h3 className="text-xl font-medium mb-2">About</h3>
                <p className="text-gray-700">{clicked.description}</p>
            </div>


             {/* Hobbies */}
             <div className="hobbies">
                <h3 className="text-xl font-medium mb-2">Hobbies</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Reading</li>
                    <li>Traveling</li>
                    <li>Cooking</li>
                    <li>Photography</li>
                </ul>
            </div>
    </div>
  )
}

export default ProfileDetails