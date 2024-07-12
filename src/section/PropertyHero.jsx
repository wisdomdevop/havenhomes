import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../authen/Firebase';
import { doc, getDoc } from 'firebase/firestore';

const PropertyHero = () => {
       const [userDetails, setUserDetails]= useState('');

    //get user data

    const fetchUserData= async()=> {
        auth.onAuthStateChanged(async(user)=> {
            console.log(user)
            const docRef= doc(db, "Users", user.uid);
            const docSnap= await getDoc(docRef);

            if(docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data())
            }
            else{
                console.log("user is not login")
            }
        })
    }
    useEffect(() => {
      fetchUserData()
     }, [])
  return (
    <div className='mt-24 bg-zinc-50 flex flex-col gap-10 p-2'>
        <section className='text-xl text-center font-bold md:text-3xl'>
            Our Properties
        </section>
        <section className='flex justify-around mt-12 flex-col md:flex-row items-center gap-10'>
            <div className='w-[80%] md:w-[30%] shadow-3xl p-6 rounded-3xl flex flex-col items-center justify-center gap-7'>
                <img src="/house1.jpg" alt="" width={350} className='mx-auto' />
                <h2 className='font-medium text-xl'>
                    A New Apartment in the City!
                </h2>

                <div className='flex justify-between gap-24'>
                    <p> <img src="/bath.png" alt=""width={20}/> <span>4 Bathroom</span></p>
                    <p> <img src="/bed.png" alt=""width={20}/> <span>4 Bedroom</span></p>
                </div>

                <h1 className='font-bold text-lg'>$4500</h1>
                <span  className='text-sm font-medium'>For rent</span>

                <button className='w-[80%]'>
                    
                        <Link to='/listings' className='bg-blue-900 w-[100%] p-3 text-white rounded-xl'>View Properties</Link>
                 
                        
                   
                </button>

            </div>

            <div className='w-[80%] md:w-[30%] shadow-3xl p-6 rounded-3xl flex flex-col items-center justify-center gap-7'>
                <img src="/house2.jpg" alt="" width={300} className='mx-auto' />
                <h2 className='font-medium text-xl'>
                    Cozy Cottage
                </h2>

                <div className='flex justify-between gap-24'>
                    <p> <img src="/bath.png" alt=""width={20}/> <span>3 Bathroom</span></p>
                    <p> <img src="/bed.png" alt=""width={20}/> <span>5 Bedroom</span></p>
                </div>

                <h1 className='font-bold text-lg'>$4500</h1>
                <span  className='text-sm font-medium'>For rent</span>

                <button className='w-[80%]'>
                     
                        <Link to='/listings' className='bg-blue-900 w-[100%] p-3 text-white rounded-xl'>View Properties</Link>
                   
                </button>

            </div>

            <div className='w-[80%] md:w-[30%] shadow-3xl p-6 rounded-3xl flex flex-col items-center justify-center gap-7'>
                <img src="/house3.jpeg" alt="" width={300} className='mx-auto' />
                <h2 className='font-medium text-xl'>
                    Modern Apartment
                </h2>

                <div className='flex justify-between gap-24'>
                    <p> <img src="/bath.png" alt=""width={20}/> <span>5 Bathroom</span></p>
                    <p> <img src="/bed.png" alt=""width={20}/> <span>6 Bedroom</span></p>
                </div>

                <h1 className='font-bold text-lg'>$204000</h1>
                <span  className='text-sm font-medium'>For Sale</span>

                <button className='w-[80%]'>
                         
                        <Link to='/listings' className='bg-blue-900 w-[100%] p-3 text-white rounded-xl'>View Properties</Link>
                   
                   
                </button>

            </div>

            

            <div></div>
        </section>
    </div>
  )
}

export default PropertyHero