import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xqxi455', 'template_wclqxei', form.current, {
            publicKey: 'weCGYQRWuAkXjvy4z',
          })
          .then(
            () => {
              console.log('Thank you for contacting me! I will get back to you as soon as possible.');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            {/* <form  ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - meronamershaoo@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form> */}

            <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - meronamershaoo@gmail.com</p>
                </div>                
                {/* <label>Name</label> */}
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="user_name" />
                {/* <label>Email</label> */}
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="user_email" />
                {/* <label>Message</label> */}
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' />
                <input className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit" value="Let's Collaborate" />
            </form>
        </div>
      )
}
