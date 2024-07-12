import React, { useState } from 'react'
import { auth , db } from './Firebase';
import  {setDoc, doc} from 'firebase/firestore'
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
   const [email, setEmail]= useState("");
   const [userName, setUserName]= useState("");
   const [password, setPassword]= useState("");
   const [phone, setPhone]= useState("");
   const [firstName, setFirstName]= useState("");
   const [lastName, setLastName]= useState("")

   const [imgUrl, setImgUrl]= useState("https://www.logomaker.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kh...GIpRdLnR3EwXs1M3EMoAJtlyItg...Ft8fwyPExevg9C3ktKMcs8");

   const handleRegister= async(e)=> {
    e.preventDefault();

    try {
        await createUserWithEmailAndPassword(auth,email,password,phone,imgUrl, userName, firstName, lastName);
        const user=auth.currentUser;
        console.log(user);
        if (user) {
            await setDoc(doc(db, "Users", user.uid), {
                email:user.email,
                phoneNumber:phone,
                firstName:firstName,
                lastName:lastName,
                userName:userName,
                imgURL:imgUrl
            })
            window.location.href='/login';
           
        }
        console.log(`${userName} registered successfully`);
        toast.success(`${userName} Registered successfully`, {
            position:"top-center"
        })
        
    } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
            position:"bottom-center"
        })
    }

   }
  return (
    <div className='h-[100%] flex  justify-center items-center md:py-12 p-4'>
        <section className='bg-black w-[40%] h-[600px] items-center justify-center my-auto rounded-l-xl shadow-xl hidden md:flex animate-slideIn'>
          <div className='text-center justify-center items-center  '>
            <img src="/haven1.jpg" alt="" className='mx-auto flex p-48 ' />
          </div>
        </section>

        <section className='flex flex-col gap-6 lg:p-4 items-center border-2 md:h-[600px] h-[100%] p-12 justify-center md:rounded-r-xl rounded-xl shadow-3xl md:w-[50%] mini:[w-80%] padAir:[w-80%] w-[100%] animate-slideDown' >
          <form onSubmit={handleRegister} className='flex flex-col items-center gap-10 w-[90%] justify-center mini:w-[100%] p-4'>
            <div className='mb-4'>
              <h1 className='w-[80%] mx-auto text-center font-bold font-poppins text-2xl '>Register</h1>
            </div>

            <div className='flex flex-col padAir:flex-row gap-8 w-[100%] items-center justify-center mini:w-[full]'>

              <div className='flex gap-2 items-center border-2 border-zinc-300 rounded-xl p-3 mini:w-[80%]'>
                <img src="/user.png" alt="" width={30} />
                <input type="text" 
                className='outline-none w-[100%] ' 
                required 
                value={userName}
                placeholder='Enter Username'
                onChange={(e)=> setUserName(e.target.value)}
                />
              </div>

             <div className='flex gap-2 items-center border-2 border-zinc-300 rounded-xl p-3 mini:w-[80%]'>
                <img src="/email.svg" alt="" width={30} />
                <input type="email" 
                className='outline-none w-[100%]' 
                required 
                value={email}
                placeholder='H@example.com'
                onChange={(e)=> setEmail(e.target.value)}
                />
              </div>

            </div>

            <div className='flex flex-col padAir:flex-row gap-8 w-[100%]  items-center justify-center'>

              <div className='flex gap-2 items-center border-2 border-zinc-300 rounded-xl p-3 mini:w-[80%]'>
                <img src="/name.svg" alt="" width={30}/>
                <input type="text" 
                className='outline-none w-[100%]' 
                required 
                value={firstName}
                placeholder='John'
                onChange={(e)=> setFirstName(e.target.value)}
                />
              </div>

             <div className='flex gap-2 items-center border-2 border-zinc-300 rounded-xl p-3 mini:w-[80%]'>
                <img src="/name.svg" alt="" width={30} />
                <input type="text" 
                className='outline-none w-[100%]' 
                required 
                value={lastName}
                placeholder='Doe'
                onChange={(e)=> setLastName(e.target.value)}
                />
              </div>

            </div>

                <div className='flex flex-col padAir:flex-row gap-8 w-[100%]  items-center justify-center'>

             

                <div className='flex gap-2 items-center border-2 border-zinc-300 rounded-xl p-3 mini:w-[80%]'>
               <img src="/phone.svg" alt="" width={30} />
                <input type="text" 
                className='outline-none w-[100%]' 
                required 
                value={phone}
                placeholder='+1(155)-676-0964'
                onChange={(e)=> setPhone(e.target.value)}
                />
              </div >
              <div className='flex gap-2 items-center border-2 border-zinc-300 rounded-xl p-3 mini:w-[80%] '>
                <img src="/password.svg" alt="" width={30} />
                <input type="password" 
                className='outline-none w-[100%]' 
                required 
                value={password}
                placeholder='Enter Password'
                onChange={(e)=> setPassword(e.target.value)}
                />
              </div>




              

            

               

           

            </div>
             <div className='w-[100%] spro:w-[80%] mt-12'>
              <button className='bg-blue-300 w-[100%] p-3 rounded-xl font-semibold font-montserrat' type='submit'>
                Register
              </button>
            </div>

            <div className='text-sm md:text-base text-right '>
              <h2>Already Have an Account? <Link to='/login' className='text-blue-600  '> Login</Link></h2>
            </div>



  
          </form>
        </section>

        <ToastContainer/>
    </div>


  )
}

export default Register