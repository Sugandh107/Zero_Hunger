'use client'
import React, { useEffect, useState } from 'react'
import RestCard from '@/components/RestCard'
import Navbar from '@/components/Navbar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase.config'
type Props = {}

const page = (props: Props) => {

  const [restaurent, setRestaurent] = useState([])

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
      // const filteredFood = filterData.filter((item) => item.restaurentName === auth?.currentUser?.displayName);

      // console.log(filterData)
      // setRestaurent(filterData);

      const uniqueRestaurants = new Set();
      const filteredRestaurants = filterData.filter((item) => {
        // Check if the restaurant name is already in the Set
        if (uniqueRestaurants.has(item.restaurentName)) {
          return false; // If duplicate, filter it out
        }
        uniqueRestaurants.add(item.restaurentName); // Add unique restaurant name to the Set
        return true; // Return true to keep the item in the filtered array
      });

      console.log(filteredRestaurants);
      setRestaurent(filteredRestaurants);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex flex-col px-5'>
        {/* <input type="text" placeholder='Search by location' /> */}
        <h1 className='text-8xl font-semibold'>Restaurents</h1>
        <div className="flex flex-wrap gap-5">
          {
            restaurent.map((res) => (
              <RestCard resName={res.restaurentName} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default page