import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <section>
            <Navbar/>
        </section>
        <section className='pt-48'>
            <Outlet/>
        </section>
    </div>
  )
}

export default Layout