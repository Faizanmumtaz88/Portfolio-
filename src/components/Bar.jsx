import React, { useState } from 'react'
import {FaBars ,FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

const Bar = () => {

const[ nav,setNav]=useState(false);

const links= [
  {
    id: 1,
    link: "Home",
},
{
    id: 2,
    link: "About",
},
{
    id: 3,
    link: "Experience",
},
{
    id: 4,
    link: "Contact",
},
]
 return (
    <div className='flex justify-between  fixed  mt-[-80px] items-center w-full h-20       
    px-4 shadow bg-white '>
      <div>
        <h1 className='text-3xl ml-5 font-signature '>Faizan Mumtaz</h1>
      </div>
      <ul className='hidden md:flex mr-40'>
     {links.map(({id, link}) =>(
          
          <li
          key={id} 
          className='px-4 cursor-pointer font-bold text-gray-500 hover:scale-105 duration-200'>
            <Link 
            to={link}
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            > 
          {link}
           </Link> 
          </li>
     
     ))}
    </ul>
     
    <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 text-gray-600 z-10 md:hidden'>
      {nav ? <FaTimes size={30}/>: < FaBars size={30}/> }
    </div>


    {nav && (
     <ul className='flex flex-col justify-center items-center absolute
                    top-0 left-0 w-full h-screen bg-gradient-to-b
                    from-slate-100 to-gray-600 text-white'>
      {links.map(({id, link}) =>(
          
          <li
          key={id} 
          className='px-4 cursor-pointer capitalize py-6 text-4xl'>
           <Link 
           onClick={()=> setNav(!nav)}
            to={link}
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            > 
          {link}
           </Link>

          </li>
     
     ))}
      
     </ul>

    )}

    </div>
  )
}

export default Bar










