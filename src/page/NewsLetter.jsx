import React from 'react'

const Newsletter = () => {
  return (
    <div className='mt-24 md:px-12 px-4'>
        <section className='flex justify-around flex-col md:flex-row items-center gap-7'>
            <div className='w-[80%] md:w-[40%]'>

                <h1 className='text-xl  md:text-4xl font-bold'>
                    Sign up for <span className='text-blue-800'>Updates</span> & Newsletter
                </h1>

            </div>

            <div className='w-[90%] md:w-[40%] '>

                <form action="">
                    <div className='w-[100%] border rounded-full p-2 flex  gap-10 px-4'>
                        <input type="email" placeholder='b@HavenHomes.com' className='outline-none md:w-[80%] w-[60%] text-sm md:text-base' />
                        <button className='bg-blue-800 text-white w-[50%] rounded-3xl py-3 '>
                            Sign Up
                        </button>
                    </div>
                </form>

            </div>
        </section>
    </div>
  )
}

export default Newsletter