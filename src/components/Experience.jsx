import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';


const Experience = () => {

   const tech =[
   
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'

    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'

    },
    {
      id:3,
      src:javascript,
      title:'JavaScript',
      style:'shadow-yellow-500'

    },
    {
      id:4,
      src:react,
      title:'React',
      style:'shadow-cyan-400'

    },
    {
      id:5,
      src:tailwind,
      title:'Tailwind',
      style:'shadow-cyan-600'

    },
    {
      id:6,
      src:github,
      title:'GitHub',
      style:'shadow-gray-400'

    },
    {
      id:7,
      src:node,
      title:'Node',
      style:'shadow-lime-500'

    },
   ]
   


  return (
    <div name="Experience"
     className='bg-gradient-to-b bg-gray-300 
    w-full h-fit'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-black'>
            <div>
                <p className='text-4xl font-bold  text-center underline
                  '>Experience</p>
                <p className='py-6 text-2xl'>These are the technologies I've been working with recently.</p>
                
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0'>

              {
               tech.map(({id,src,title,style})=>(

                <div
                 key={id} 
                 className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt='' className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>

               ))


              }
               

                 
          </div>




        </div>
    </div>


  )
}

export default Experience