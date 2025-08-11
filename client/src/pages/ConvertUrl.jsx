import React from 'react'
import { useState } from 'react'
import baseUrl from '../../baseurl';
import Header from './Header';

function ConvertUrl() {
    const [url , setUrl] = useState();
    const [formData , setFormData] = useState({
        url:""
    })
    const [data , setData] = useState()

 
    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    async function handleForm(event){
        event.preventDefault();     
               setData(url)
       
        try{

            const data = await fetch(`${baseUrl}url`,{
                method : 'POST',
                headers :
                {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(formData)
            })
            console.log(data)

            const res = await data.json();
            console.log(res)
            if(res){
                setUrl("")
            }
        }
        catch(err){
                console.log(err)
        }
    }
    console.log(data)

    // console.log(url)
  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white w-screen h-screen'>
        <Header/>
        <div className='flex items-center justify-center mt-[250px]'>
        <form onSubmit={handleForm}>
       <input className=' border-2 font-mono w-[400px] border border-gray-700 h-[50px] rounded-lg dark:text-black' placeholder='enter your url' name='url' onChange={handleChange} value={formData.url}/>
       <br></br>
       <button className='font-mono mt-[10px] bg-black text-white w-[100px] h-[40px] rounded-lg border-b-2'>submit</button>
      </form>
        </div>
      
    </div>
  )
}

export default ConvertUrl
