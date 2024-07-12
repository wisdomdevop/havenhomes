import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { auth, db } from '../authen/Firebase';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = () => {
    const [userDetails, setUserDetails]= useState('')
     const [openNavigation, setOpenNavigation] = useState(false);
     const switchNav = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };


  const FetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log('User is not logged in');
      }
    });
  };

  useEffect(() => {
    FetchUserData();
  }, []);


  return (
    <div className='bg-zinc-50 fixed top-0 w-[100%]'>

        <section>

            <div className='flex md:justify-around p-3 items-center font-medium text-lg justify-between px-5'>
                <div>
                    <Link>
                    <img src="/haven2.jpg" alt="" />
                    </Link>
                </div>
                <div className='hidden md:flex gap-20'>
                    {navLinks.map((item)=> (
                        <Link to={item.url} key={item.id} >{item.title}</Link>
                    ))}
                </div>

                <div className='md:flex gap-3 hidden'>
                    {!userDetails? (
                        <div className='flex gap-6'>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>Login</Link>
                        </div>
                    ): (
                        <div>
                            <Link to='/profile'><img src="/user.png" alt="" width={30} /></Link>
                        </div>
                    )}
                </div>

                <div className='flex md:hidden gap-3 items-center '>
                    <div>
                        {userDetails? (
                            <div><Link to='/profile'><img src="/user.png" alt="" width={30}/></Link></div>
                        ) : (
                            <div className='hidden'></div>
                        )}
                    </div>
                    <div>
                        <img src="/menu.svg" alt="" onClick={switchNav} />
                    </div>
                </div>

            </div>

            <div className={`${openNavigation? "flex": " hidden"} flex-col h-[350px] items-center justify-center gap-16 font-medium md:hidden animate-slideIn `}>
                {navLinks.map((item)=> (
                    <Link to={item.url} key={item.id} onClick={handleClick}>{item.title}</Link>
                ))}

                <div>
                    {!userDetails? (
                        <div className='flex gap-8 '><Link to='/register' onClick={handleClick}>Register</Link>
                        <Link to='/login' onClick={handleClick}>Login</Link>
                        </div>
                    ): (
                        <div></div>
                    )}
                    
                </div>
            </div>

        </section>

    </div>
  )
}

export default Navbar