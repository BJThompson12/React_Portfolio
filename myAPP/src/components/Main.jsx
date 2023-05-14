import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import backgroundImage from '../assets/macComputer.jpg'; // import the image file

const Main = () => {
  return (
    <div id='main'>
      <img className=' h-screen' src='' alt='' />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/0'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl front-bold text-black'>
            Brandon Thompson
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-black'>
            I'm a
            <TypeAnimation
              sequence={[
                'Developer', // Types 'One'
                2000, // Waits 1s
                'Coder', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Creator', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Tech Enthusiast', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[100px] w-full'>
            <a
              href='https://www.linkedin.com/in/brandon-thompson-a7099720/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <FaLinkedinIn className='cursor-pointer' size={20} />
            </a>
            <a
              href='https://github.com/BJThompson12'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <FaGithub className='cursor-pointer' size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;