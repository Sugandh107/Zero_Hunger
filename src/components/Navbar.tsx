'use client'
import { auth } from '@/config/firebase.config';
import { signOut } from 'firebase/auth';
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const handelSignout = async() => {
        try {
            await signOut(auth);
            window.location.href = '/';
          } catch (error) {
            console.error("Error signing out with Google", error);
          }
    }

    return (
        <div className='w-full flex justify-between items-center bg-blue-500 text-white font-semibold px-5 py-2'>
            <h1 className='text-2xl'>Zero Hunger</h1>
            <button onClick={handelSignout} className='px-5 py-3 bg-red-500 rounded-md'>Signout</button>
        </div>
    )
}

export default Navbar