import React, { useEffect, useState } from 'react'

// import { LuSun } from "react-icons/lu";
// import { LuMoon } from "react-icons/lu";
import { IoIosSunny } from "react-icons/io"
import { IoMoon } from "react-icons/io5";


// console.log(LuSun, LuMoon);

import { Link } from 'react-router-dom';

function Header() {

  const [darkMode  , setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <div>
        <div className="flex flex-col font-mono justify-start items-start px-4 sm:px-12 py-5 border-b border-b-2 border-gray-700 sm:flex-row gap-y-4 sm:gap-x-9 lg:gap-x-[1150px]">
  <h1 className="font-bold text-4xl sm:text-3xl"><Link to={'/home'}>Shortly</Link></h1>
  <button onClick={() => setDarkMode(!darkMode)} className='lg:mt-3 lg:pb-2 lg:ml-[300px]'>{darkMode ? <IoIosSunny size={26}/> : <IoMoon size={26}/>}</button>
   </div>
    </div>
   

  )
}

export default Header
