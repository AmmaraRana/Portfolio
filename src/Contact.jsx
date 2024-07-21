import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contact = () => {
    const{
        register,
        handleSubmit,
        formState:{errors},

    }=useForm();
    const onSubmit=async(data)=>{
        const userInfo={
            Name:data.Name,
            Email:data.Email,
            Message:data.Message
        }
        try {
          await  axios.post("https://getform.io/f/awngyqqb",userInfo);
          toast.success("Your message has been sent");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, Try again later")
        }
    }
  return (
    <>
    <hr/>
      <div  name="contact" className='max-w-screen-2xl container mt-12 mb-4 mx-auto px-4 md:px-20'>
        <div className='text-left mb-5'>
          <h1 className='text-3xl font-bold'>Contact Me</h1>
          <span>Please fill the form to contact me</span>
        </div>
        <div className='flex justify-center items-center'>
          <form onSubmit={handleSubmit(onSubmit)} 
        //   action='https://getform.io/f/awngyqqb' method='POST' 
          className='w-96 p-8 bg-slate-200 shadow-lg rounded-lg'>
            <h1 className='text-2xl font-bold mb-6 text-center'>Send your message</h1>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
              <input {...register("Name", { required: true })} name='Name' className='w-full px-3 
              py-2 border rounded-lg focus:outline-none focus:shadow-outline' type='text' id='name' placeholder='Your name' />
               {errors.Name && <span>This field is required</span>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
              <input {...register("Email", { required: true })} name='Email' className='w-full px-3 py-2
               border rounded-lg focus:outline-none focus:shadow-outline' type='email' id='email' placeholder='Your email' />
                {errors.Email && <span>This field is required</span>}
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>Message</label>
              <textarea {...register("Message", { required: true })} name='Message' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline
              ' id='message' placeholder='Your message' rows='4'/>
               {errors.Message && <span>This field is required</span>}
            </div>
            <div className='flex justify-center'>
              <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;




