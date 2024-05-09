'use client'
import React from 'react'
import { getAuth } from 'firebase/auth'
import Link from 'next/link'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-evenly items-center bg-slate-300 text-white'>
                <h1 className='text-8xl font-bold text-slate-900 bg-clip-text  text-transparent p-5'>Login as</h1>
                <div className='w-full flex justify-evenly'>
                    <div
                        className="bg-gradient-to-br from-gray-100 to-slate-500 flex justify-center items-center text-slate-900 rounded-md h-[60vh] w-[35vw] cursor-pointer shadow-md"
                        onClick={() => { window.location.href = '/auth/restaurent' }}>
                        <h1 className='text-6xl font-semibold'>Restaurent</h1>
                    </div>

                    <div
                        className="bg-gradient-to-br from-gray-100 to-slate-500 flex justify-center items-center text-slate-900 h-[60vh] rounded-md w-[35vw] cursor-pointer shadow-md"
                        onClick={() => { window.location.href = '/auth/user' }}>
                        <h1 className='text-6xl font-semibold'>User</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page