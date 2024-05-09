'use client'
import React, { useEffect, useState } from 'react'
import FoodCard from '@/components/FoodCard'
import Navbar from '@/components/Navbar'
import { useParams, useRouter } from 'next/navigation'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '@/config/firebase.config'

type Props = {}

const page = (props: Props) => {

  const router = useRouter()

  var resName = useParams()
  resName = decodeURIComponent(resName.restaurent);
  console.log(resName)

  const [foodName, setFoodName] = useState([])
  const [quantity, setQuantity] = useState<Number>()
  const foodCollectionRef = collection(db, "food");

  useEffect(() => {
    getFood()
  }, [])

  const getFood = async () => {
    try {
      const data = await getDocs(foodCollectionRef);
      const filterData: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // console.log(filterData)
      const filteredFood = filterData.filter((item) => item.restaurentName === resName);

      console.log(filterData)
      setFoodName(filteredFood);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen p-5 bg-white text-black'>
        <h1 className='text-8xl font-semibold'>{resName}</h1>

        <div className="flex flex-col gap-3 mt-7">
          {
            foodName.map((f) => (
              <FoodCard key={f.restaurentName} foodName={f.foodName} quantity={f.quantity} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default page