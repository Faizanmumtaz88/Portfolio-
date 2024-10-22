import React, { useState } from 'react'
import aboutImage from "../assets/young-freelancer.png"

const About = () => {
      const[data,setData] =useState({
       image:aboutImage,
       
       title:"Mern Stack Developer",

       desc1:"Hello! I am Faizan Mumtaz",

       desc2:`I'm a passionate web developer with a love for making clean, efficient, and user-friendly websites.
       My journey in development started with a curiosity about how the web works, and this curiosity quickly grew into a deep interest in coding and design.
        Although I'm new to the industry, I've spent countless hours to learn my skills in HTML, CSS, JavaScript, and various modern frameworks.`,

       desc3:`My approach to development focuses on creating responsive, and visually appealing websites. I’m eager to work on real-world projects, collaborate with others in the tech community, and continue learning every day.`,

     })



  return (
     <>
    <div name="About"
     className='main-container py-10 text-black bg-slate-100 '>
     <h1 className='text-4xl underline font-bold text-center pb-10'>About me</h1>
      
      
      <div className='flex flex-col md:flex-row items-center'>
      
      {/* image container */}
      <div className='w-full flex justify-center mb-5 md:mb-0  '>
     <img className='w-3/5 rounded-full shadow-lg'
      src={data.image} 
      alt="Faizan Mumtaz" />
      </div>
    {/* text container */}
     <div className='w-full px-5 sm:px-10 md:px-0'>

     <div className='space-y-7 text-1xl ' >
     <h1 className='text-5xl font-semi-bold  '>{data.title}</h1>
     <p>{data.desc1} </p>
     <p>{data.desc2}</p>
     <p>{data.desc3}</p>
     </div>
     </div>


     </div>

    </div>
    </>
  )
}

export default About