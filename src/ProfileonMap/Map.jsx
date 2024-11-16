import React, { useState, useEffect } from "react";
import ReactMap, { Marker, Popup } from "react-map-gl";


function Map({setSelecteduser,selecteduser}) {
  const [viewport, setViewport] = useState({
   
    longitude: 72.8160861,
    latitude: 18.9068624,
    width: "100vw",
    height: "100vh",
    zoom: 8
  });
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
          setViewport((viewport)=>{
    return {...viewport,longitude:selecteduser.longitude,latitude:selecteduser.latitude}
 })
  },[])

  const handleBackClick =()=>{
    localStorage.removeItem('selecteduser');
    setSelecteduser(null)
  }

  return (
    <div className="w-full h-full ">
       <ReactMap {...viewport}
   mapboxAccessToken={import.meta.env.VITE_MapboxAccessToken}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    onMove={(evt) =>{ setViewport(evt.viewState) }}
     >

      <Marker longitude={selecteduser.longitude} latitude={selecteduser.latitude} onClick={() => setShowPopup(!showPopup)} >
          <div className="bg-red-500 rounded-full w-4 h-4 border-2 border-white">
          </div>
        </Marker>
        {showPopup && (
          <Popup
          longitude={selecteduser.longitude} latitude={selecteduser.latitude}
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
          >
            <div className="text-xl">Hey 👋,this is {selecteduser.name}</div>
          </Popup>
        )}
        <button className="p-2 bg-red-500 text-white rounded-md absolute" onClick={handleBackClick}>Back</button>
    </ReactMap>
  
    </div>
  )
}

export default Map;
