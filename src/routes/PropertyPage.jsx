import React, { useEffect, useState } from 'react'
import PropertyList from '../page/PropertyList'
import { listData } from '../constants/data'
import Footer from '../section/Footer';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../authen/Firebase';
import Login from '../authen/Login';

const PropertyPage = () => {
  const [userDetails,setUserDetails]= useState('')
  const [searchTerm, setSearchTerm]= useState('');
  const [price, setPrice]= useState('');
  const [status, setStatus]= useState('')
  const filteredProperties= listData.filter(property=> {
    return(
      (property.type.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm=== '') && 
        (property.many=== status || status=== '')
        &&
        (property.price === price || price=== '')
      
    );
  });


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
    <>{userDetails? ( 
      <>
      <div className='container mx-auto p-4'>
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <div className='flex flex-col lg:flex-row gap-2'>
      <input type="text"
      placeholder='Types of Properties...' 
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className='border p-2 mb-4 w-full rounded-2xl outline-none'
      />

     <input type="text"
      placeholder='Price' 
      value={price}
      onChange={e => setPrice(e.target.value)}
      className='border p-2 mb-4 w-full rounded-2xl outline-none'
      />

         <input type="text"
      placeholder='Sale/Rent' 
      value={status}
      onChange={e => setStatus(e.target.value)}
      className='border p-2 mb-4 w-full rounded-2xl outline-none'
      />
      <button className='w-full lg:w-[50%] bg-blue-900 text-white p-1 rounded-xl mb-2'>
        Search
      </button>
      </div>

      
      <PropertyList properties={filteredProperties}/>
      
    </div>

    <section className='mt-24'>
      <Footer/>
    </section>
  
  </>) : (

    <Login/>
  )}
 
    </>
  )
}

export default PropertyPage