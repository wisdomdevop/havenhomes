import React, { useEffect, useState } from 'react'
import {auth, db} from "./Firebase";
import {doc, getDoc} from "firebase/firestore";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Profile = () => {
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

      const handleLogout= async()=> {
        try {
            await auth.signOut();
            console.log("User Logged Out successfully!")
            window.location.href="/login";
            toast.success(`${userDetails.firstName} logged out successfully`, {
                position: "top-center"
            })

        } catch (error) {
            console.log("Error logging out:", error.message)
        }
     }


    
  return (
    <div  className='flex flex-col items-center justify-center h-[500px] mt-12 '>
        {userDetails?
         (
            <div className='shadow-3xl md:h-[550px] flex flex-col items-center justify-center w-[80%] lg:w-[40%] lg:gap-10 gap-5 rounded-lg animate-slideDown   p-20 h-[100%]'>
                <div className='w-[50%]'>
                    <img src={userDetails.imgURL} alt="" className='rounded-full object-cover pt-8 w-[100%]'/>
                </div>
                <h1 className='font-semibold text-lg lg:text-xl mb-4'>Welcome {userDetails.userName}</h1>
                <div className='flex flex-col gap-5 font-medium text-base lg:text-lg'>
                    <p>Email: {userDetails.email}</p>
                    <p>First Name: {userDetails.firstName}</p>
                    <p>
                        Last Name : {userDetails.lastName}
                    </p>
                    <p>
                        Phone Number: {userDetails.phoneNumber}
                    </p>
                </div>
                <button className='p-4 bg-blue-600 font-bold rounded-xl text-white w-[80%]' onClick={handleLogout}>
                    Logout
                </button>
            </div>
         ): 
        
        (
            <div className='text-lg lg:text-xl '>
                <p>Sign in to Continue <Link to ='/login ' className='font-medium text-coral-red'>Login</Link></p>

            </div>

            
        )}
    </div>
  )
}

export default Profile