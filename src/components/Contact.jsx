import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
        Contact
      </h1>
      <form>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-center'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
              pattern='^[A-Za-z\s]+$'
              required
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-center'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
              pattern='^\d{10}$'
              required
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-center'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
            pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
            required
          />
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-center'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='10'
            name='message'
          ></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full  p-4 rounded-lg'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
