import React, { useState } from 'react'
import Header from './Header';
import Features from './Features';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import ConvertUrl from './ConvertUrl';

function Landing() {
    const [name , setName] = useState(0);

  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white w-screen h-screen'>
      <div className='flex flex-col gap-16'>
            <Header></Header>
        <div className='flex flex-col gap-5'>
            <h1 className='font-mono font-bold flex items-center justify-center text-4xl sm:text-5xl'>Convert Long URLs</h1>
            <p className='font-mono max-w-3xl mx-auto mb-12 text-base sm:text-lg text-gray-800 flex items-center justify-center sm:w-[500px] lg:w-full dark:text-white'>Shortly lets you convert long urls into short ones </p>
       </div>
      </div>
      <div className='flex items-center justify-center '>
        <Link to={'/convert-url'}>
            <button className="font-mono font-bold border-2 border-gray-600 py-3 w-40 hover:bg-black hover:text-white transition-colors duration-300 delay-100">
           Get Started
    </button></Link>
    
      </div>
      <div className='flex gap-x-[10px] lg:mt-[80px] cursor-pointer'>
        <Marquee className='' pauseOnHover={true}>
        <Features title={"No Signup or Login"} description={"Create short links instantly — no account needed, ever."}/>
        <Features title={"Secure & Reliable"} description={"Safe redirection with no spam or malicious links."}/>
        <Features title={"No Expiry"} description={"Your short links stay active forever."}/>
        <Features title={"Click Tracking"} description={"Monitor how many times your link has been accessed."}/>
        <Features title={"Screen Sharing"} description={"Present your screen in real-time. "}/>
        <Features title={"Screen Sharing"} description={"Present your screen in real-time. "}/>
        </Marquee>
        
      </div>
     
    </div>
  )
}

export default Landing



 //className='grid grid-cols-3 gap-5 mt-[20px] lg:mt-[30px] w-fit mx-auto'