import React from 'react'
import { Link, useParams } from 'react-router-dom'
import baseUrl
 from '../../baseurl'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'

function ShortUrl() {
    const [data , setData] = useState()
    const params = useParams()
    console.log(params?.url)


    async function getShortLink(){
        try{
          const fetchData = await fetch(`${baseUrl}url/${params?.url}`, {
            method : 'GET'
          })

          const res  = await fetchData.json()
          console.log(res)
          if(res){
            setData(res)
          }
        }
        catch(err){
            console.log(err)
        }
    }
    console.log(data)

    useEffect(() => {
        getShortLink()
    } , [])
  return (
    <div>
        <Header></Header>
      <div >
            <h1 className='font-mono font-bold flex items-center justify-center text-4xl sm:text-5xl mt-[50px]'>Your Short Link is Ready</h1>
            <p className='font-mono max-w-3xl mx-auto mb-12 text-base sm:text-lg text-gray-800 flex items-center justify-center sm:w-[500px] lg:w-full dark:text-white'>Please Click On the link Below !</p>
       </div>
       <div className='flex border border-2 border-gray-700 w-[400px] py-[20px] ml-[650px] pl-[20px]'>
                 <h1 className='font-mono'>
  <a href={`${baseUrl}url/${params?.url}`} target="_blank" rel="noopener noreferrer">
    {`${baseUrl}url/${params?.url}`}
  </a>
</h1>
       </div>
    

    </div>
  )
}

export default ShortUrl
