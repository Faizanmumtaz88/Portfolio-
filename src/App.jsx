import { useState } from 'react'
import Bar from './components/Bar'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Bar/>
      <div className="mt-20"> {/* Add margin-top to HeroSection */}
        <Hero />
      </div>
      
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster />
    </>
  )
}

export default App
