import axios from 'axios';
import { Input } from 'postcss'
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {

  const { register,
     handleSubmit,
      
      formState: { errors },
     } = useForm();
     const onSubmit = async(data) => {
      const userInfo={
        name:data.name,
        email:data.email,
        message:data.message,
      }
      try {
      await  axios.post("https://getform.io/f/bejyqyza",userInfo)
        toast.success("Your message has been sent")
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
      }

     }

  return (
    <div name="Contact"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 '>
        <h1 className='text-4xl font-bold  text-center underline mt-5'>Contact me</h1>
    <div className=' flex flex-col items-center justify-center mt-10'>

        <form 
          onSubmit={handleSubmit(onSubmit)}

        // action='https://getform.io/f/bejyqyza' 
       // method='POST'
        
        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
          <h1 className='text-xl  font-semibold mb-4'>Send Your Message</h1>
         <div className='flex flex-col mb-4'>
          <label className='block text-gray-800 font-bold'>FullName</label>
           <input  {...register("name", { required: true })}
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
          type="text"
          name='name'
          placeholder='Enter Your fullname'
           />
           {errors.name && <span className='text-red-700'>Please fill it in</span>}
         </div>
         <div className='flex flex-col mb-4'>
          <label className='block text-gray-800 font-bold'>Email Address</label>
           <input {...register("email", { required: true })}
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
          
          type="text"
          name='email'
          placeholder='Enter Your email'
           />
           {errors.email && <span className='text-red-700'>Please fill it in</span>}
         </div>
         <div className='flex flex-col mb-4'>
          <label className='block text-gray-800 font-bold'>Message</label>
           <textarea  {...register("message", { required: true })}
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
          name='message'
          type="text"
          placeholder='Enter Your message'
           />
           {errors.message && <span className='text-red-700'>Please fill it in</span>}
         </div>
         <button className='bg-black text-white rounded-xl px-3 py-3 hover:bg-slate-400'>Send</button>
        </form>
     </div>
    </div>
  )
}

export default Contact