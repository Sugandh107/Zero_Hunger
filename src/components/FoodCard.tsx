'use client'
import { auth, db } from '@/config/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

type Props = {
    foodName: String;
    quantity: String;
}

const FoodCard = (props: Props) => {
    useEffect(() =>{
        getUser();
    })

    const [store, setStore] = useState(false)
    const usersCollectionRef = collection(db, "users");

    const getUser = async () => {
        try {
            const data = await getDocs(usersCollectionRef);
            const filterUser: any = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            // console.log(filterData)
            const filteredusers = filterUser.filter((item) => item.email === auth?.currentUser?.email);

            console.log(filteredusers)
            if (filteredusers[0].store)
                setStore(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bg-slate-300 text-3xl px-5 py-3 w-full rounded-md flex justify-between items-center font-semibold">
            <p>{props.foodName}</p>
            <p>Quantity: {props.quantity}</p>
            {
                store?
                <button className='px-5 py-3 bg-red-500 rounded-md text-white'>Delete</button>
                :<button className='px-5 py-3 bg-green-500 rounded-md text-white'>Contact us</button>
            }
        </div>
    )
}

export default FoodCard