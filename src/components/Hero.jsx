import React, { useEffect } from 'react'
import HeroImage from "../assets/a1.png"
import Typed from 'typed.js'
import { useRef } from 'react'
import HeroBackground from "../assets/photo.png"
const Hero = () => {

   const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End Developer", "Programmer", "Back-End Developer", "MERN Developer","Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);




  return (
    <div  name="Home"
     className=' main-container flex  font-family: "Roboto", sans-serif;  '>
      <div
      
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: "cover",
        
      }}
      
      className='w-full  lg:w-1/3" flex justify-center  text-white'> 
        {/* text */}
      <div className='w-2/3 mt-20  mb-16 '>
        <h3 className='text-3xl  font-sans '>Hi, I am</h3>
        <h1 className='mt-2 text-5xl  font-bold '>Faizan Mumtaz</h1>
        <h2 className='mt-2 text-2xl  font-sans'>And I am <span ref={el}></span></h2>

        

      <div className='icon-container space-x-5 flex mt-2 '>
        <a className='hover:bg-slate-400 cursor-pointer px-2 py-2 h-10 w-10  rounded-full flex justify-center items-center bg-gray-700'>
        <i class="fa-brands text-2xl fa-facebook-f"></i>
       </a>
       <a className='hover:bg-slate-400 cursor-pointer px-2 py-2 h-10 w-10 rounded-full flex justify-center items-center bg-gray-700'>
       <i class="fa-brands text-2xl fa-instagram"></i>

       </a>
       <a className='hover:bg-slate-400 cursor-pointer px-2 py-2 h-10 w-10  rounded-full flex justify-center items-center bg-gray-700'>

       <i class="fa-brands text-2xl fa-linkedin-in"></i>

      </a>


      </div>
      <br/> 

      <a className="px-3 py-2 bg-orange-400 rounded-full font-semibold hover:bg-slate-400" href="mailto:faizanmumtaz88@gmail.com">
          Contact me
     </a>       
      </div>
      </div>
      <div className=" w-full  hidden sm:block sm:w-full ">
       {/* image */}
      <img className='mt-10 my-2 border rounded-full shadow-lg w-full lg:w-2/4 h-auto ml-40  ' src={HeroImage}/>
      </div>
    </div>
  )
}

export default Hero