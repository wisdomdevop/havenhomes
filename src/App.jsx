import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './section/Hero'
import SearchHero from './components/SearchHero'
import PropertyHero from './section/PropertyHero'
import Newsletter from './page/NewsLetter'
import Footer from './section/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Hero/>
      </section>
      <section>
        <SearchHero/>
      </section>
      <section>
        <PropertyHero/>
      </section>
      <section className='mt-24 mb-24'>
        <Newsletter/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default App
