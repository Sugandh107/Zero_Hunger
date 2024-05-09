'use client'
import React from 'react'

type Props = {
  resName: String;
}

const RestCard = (props: Props) => {

    const checkRestaurent = () =>{
        window.location.href = `/user/${props.resName}`
    }
  return (
    <div className='flex flex-col bg-slate-300 p-5 rounded-md w-[350px]'>
        <div><img src='/res_img.jpg' className='rounded-sm'/></div>
        <div className='w-[75%] py-3'>
            <h2 className='text-3xl'>{props.resName}</h2>
            {/* <p className='text-xl'>Nanawadi</p> */}
            <button className='px-5 py-2 mt-3 bg-blue-500 text-white font-semibold  rounded-md' onClick={checkRestaurent} >Check</button>
        </div>
    </div>
  )
}

export default RestCard