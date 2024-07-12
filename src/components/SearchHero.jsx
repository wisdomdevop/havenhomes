import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../authen/Firebase'
import { doc, getDoc } from 'firebase/firestore'

const SearchHero = () => {
    const [userDetails, setUserDetails]= useState('a')
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
    <div className='mb-12 mt-12'> 
        <section>
            <div>
                <section className='flex flex-col md:flex-row items-center justify-center md:gap-0 gap-9 mx-auto'> 
                    <div className='w-[80%] md:w-[20%] border-2 rounded-md md:rounded-lg lg: rounded-r-xl md:border-l-8 md:border-r-0 border-l-2 border-zinc-400 '>
                        <input type="text" placeholder='Search Terms'
                        className='w-[100%] p-3 outline-none '
                        
                         />
                    </div>
                    <div className='w-[80%] md:w-[20%] border-2 md:rounded-none rounded-xl border-zinc-400'>
                        <input type="text" placeholder='City Location' 
                        className='w-[100%] p-3 outline-none'
                         
                         
                        />
                    </div>

                    <div className='w-[80%] md:w-[20%] border-2 md:rounded-none rounded-xl border-zinc-400'>
                        <input type="number" placeholder='Price'
                        className='w-[100%] p-3 outline-none'
                        
                        />
                    </div>

                    <div className='w-[80%] md:w-[20%]'>
                        <button className='p-3 md:rounded-r-xl bg-blue-800 text-white w-[100%] rounded-lg' >
                           {userDetails? (
                             <Link to='/listings'   className='w-[100%]'>Search</Link>
                           ): (
                             <Link to='/login'   className='w-[100%]'>Search</Link>
                           )}
                        </button>
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}

export default SearchHero