// App.js

import { IoSearchSharp } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import { useWeather } from './context/Weather';
import backgroundImage from './assets/backGround.jpg'
function App() {
  const weather = useWeather();
   
  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  },[]);  

  return (
    <div style={{ backgroundImage: `url(${backgroundImage}) ` ,backgroundPosition:'center', backgroundSize:'cover' }} className="p-6 flex bg-black justify-center items-center    h-screen  shadow-md ">
      <div className="w-1/4   shadow-md items-center  h-[50%] rounded-xl p-3 flex flex-col bg-gray-800 bg-opacity-60 ">
        <h1 className='text-2xl text-white text-opacity-55'>Weather Forecast</h1>
        
        <div className='flex w-10/12 h-10  shadow-md rounded-full overflow-hidden'>
        <input className='focus:outline-none bg-transparent text-white text-opacity-45 text-xl w-10/12 h-full p-2 ' 
          placeholder="Search here"
          value={weather.searchCity}
          onChange={(e) => weather.setSearchCity(e.target.value)}
        />
          <IoSearchSharp   onClick={weather.fetchData} className='hover:bg-gray-600 cursor-pointer  hover:bg-opacity-35 h-full   w-2/12 p-2' />
       

        </div>
        
        <div className="  w-full flex justify-center items-center flex-col h-[60%] ">
          <img src={weather?.data?.current?.condition?.icon} />
          <h2>{weather.data?.current?.temp_c}. C</h2>
          <h5>
              {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
              {weather.data?.location?.country}
            </h5>
        </div>

        <button className=" " onClick={weather.fetchData}>
          Refresh
        </button>

      </div>
    </div>
  );
}

export default App;
