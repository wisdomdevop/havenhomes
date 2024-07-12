import React, { useState } from 'react'
import {auth} from "./Firebase";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    
    const handleSubmit= async(e)=> {
        e.preventDefault();

        try {

            await signInWithEmailAndPassword(auth, email, password);
            console.log("user logged in successfully"); window.location.href='/'

            toast.success("Success", {
                position:"top-center"
            })
           
            
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position:'bottom-center'
            })
        }
    }

  return (
        <div className='flex justify-center items-center mt-12'>
      <section className='bg-blue-200 h-[500px] w-[40%] rounded-l-2xl hidden md:flex animate-slideIn items-center justify-center'>
        <div>
          <h1 className='text-black font-bold text-lg md:text-2xl mb-6'>
            WELCOME BACK
          </h1>

          <img src="/haven3.jpg" alt="" />

        </div>
      </section>
      <section className='flex flex-col justify-center shadow-3xl h-[500px] md:w-[40%] w-[80%] rounded-r-xl animate-slideDown'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 items-center justify-center py-auto p-5'>
          <div>
            <h2 className='text-xl md:text-2xl font-bold font-poppins'>
              Login
            </h2>
          </div>

          <div className='flex items-center gap-3 border p-2 rounded-xl w-[80%] font-medium'>
            <img src="/email.svg" alt="" width={25} />
            <input type="email"
            placeholder='n@example.com'
            className='outline-none'
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
          </div>

        <div className='flex items-center gap-3 border p-2 rounded-xl w-[80%] font-medium'>
            <img src="/password.svg" alt="" width={25} />
            <input type="password"
            placeholder='Enter Password'
            className='outline-none'
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <div className='w-[80%]'>
            <button type='submit' className='bg-black text-white font-bold w-[100%] p-2 rounded-xl' >
              Login
            </button>
          </div>

          <div>
            <h1 className='text-sm md:text-base'>Dont Have an account? <Link to='/register' className='text-blue-500'>Register</Link></h1>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login