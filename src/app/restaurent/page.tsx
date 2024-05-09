'use client'
import FoodCard from '@/components/FoodCard'
import Navbar from '@/components/Navbar'
import { auth, db } from '@/config/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import Popup from "reactjs-popup";

type Props = {}

const page = (props: Props) => {
    const [name, setName] = useState('Restaurent Name')
    const [food, setFood] = useState([])


    useEffect(() => {
        // setName(auth?.currentUser?.displayName)
        getFood();
        getUser();
    }, [])

    useEffect(() => {
        // setName(auth?.currentUser?.displayName)

    }, [food])


    let closePopup: any;

    const [foodName, setFoodName] = useState('')
    const [quantity, setQuantity] = useState<Number>()
    const foodCollectionRef = collection(db, "food");

    const addFood = async () => {
        try {
            await addDoc(foodCollectionRef, {
                foodName: foodName,
                quantity: quantity,
                restaurentName: auth?.currentUser?.displayName || auth?.currentUser?.email,
            });
            // getPosts();
            getFood()
            closePopup();
        } catch (error) {
            console.log(error);
            closePopup();
        }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const name = String(auth?.currentUser?.displayName);
            setName(name);
        } else {
            console.log("Not logged in");
        }
    });


    const getFood = async () => {
        try {
            const data = await getDocs(foodCollectionRef);
            const filterData: any = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            // console.log(filterData)
            const filteredFood = filterData.filter((item) => item.restaurentName === auth?.currentUser?.displayName);

            console.log(filterData)
            setFood(filteredFood);
        } catch (error) {
            console.log(error);
        }
    };

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
            <>
                <Navbar />
                <Popup
                    className="fixed inset-0 flex justify-center items-center"
                    trigger={
                        <button className="rounded-md border-2 bg-green-500 text-white font-semibold border-white px-3 py-2 m-3 hover:bg-slate-100 hover:text-black duration-700">
                            Add Food
                        </button>
                    }
                    position="center center"
                    modal
                    // closeOnDocumentClick={false} // To prevent closing on document click
                    ref={(ref: any) => (closePopup = ref && ref.close)}
                >
                    <div className="bg-none border-white border-2 bg-slate-400 flex gap-3 flex-col justify-center items-center text-black p-2 shadow-lg rounded-md">
                        {/* bg-gradient-to-br from-[#292929] to-[#252525] */}
                        <span className="text-white text-xl">Add food details</span>
                        <input
                            onChange={(e) => { setFoodName(e.target.value) }}
                            value={foodName}
                            placeholder="Food name"
                            className="bg-none bg-transparent border-2 text-white text-xl p-2 rounded-md placeholder:text-white
          w-[35vw]"
                        />
                        <input
                            onChange={(e) => { setQuantity(Number(e.target.value)) }}
                            value={Number(quantity)}
                            type='number'
                            placeholder="Quantity (For how many people)"
                            className="bg-none bg-transparent border-2 text-white text-xl p-2 rounded-md placeholder:text-white
          w-[35vw]"
                        />
                        <button
                            onClick={addFood}
                            className="w-full rounded-md border-2 border-white px-3 py-2 m-3 text-xl text-white font-semibold hover:bg-slate-100 hover:text-black duration-700"
                        >
                            Add Food
                        </button>
                    </div>
                </Popup>

                <div className='w-full min-h-screen p-5 bg-white text-black'>
                    <h1 className='text-8xl font-semibold p-5'>{name}</h1>
                    {/* <button onClick={addFood} className='px-5 py-3 bg-green-500 rounded-md my-3'>Add Food</button> */}

                    <div className="flex flex-col gap-3">
                        {
                            food.map((f) => (
                                <FoodCard key={f.restaurentName} foodName={f.foodName} quantity={f.quantity} />
                            ))
                        }
                    </div>
                </div>
            </>
        )
}

export default page