import React, { useState } from 'react';
import axios from 'axios';

// import emailjs from 'emailjs-com';

export const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    {/* Your EmailJS service ID, template ID, and Public Key  */}
=======
    // Your EmailJS service ID, template ID, and Public Key 
>>>>>>> parent of cbf3f2d9 (Updates)
    const serviceId = 'service_xqxi455';
    const templateId = 'template_wclqxei';
    const publicKey = 'weCGYQRWuAkXjvy4z';

<<<<<<< HEAD
    {/* Create an object with EmailJS service ID, template ID, Public Key, and Template params */}
=======
    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
>>>>>>> parent of cbf3f2d9 (Updates)
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        user_name: name,
        user_email: email,
        to_name: 'Meron Amer Shaoo',
        message: message,
      }
    };

<<<<<<< HEAD
    {/* Send the email using EmailJS API */}
=======
    // {/* Send the email using EmailJS API */}
>>>>>>> parent of cbf3f2d9 (Updates)
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - meronamershaoo@gmail.com</p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Let's Collaborate</button>
      </form>
    </div>
  )
}
