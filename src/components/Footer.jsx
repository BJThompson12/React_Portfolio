import React from 'react';
import { FaLinkedinIn, FaGithub, FaDownload } from 'react-icons/fa';
import pdf from '../assets/BThompsonResume.pdf';

const Footer = () => {
  return (
    <section className='bg-[#001b5e]'>
      <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
          <div className='px-5 py-2'>
            <a
              href='#main'
              className='text-base leading-6 text-gray-100 hover:text-gray-400'
            >
              About
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#work'
              className='text-base leading-6 text-gray-100 hover:text-gray-400'
            >
              Work
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#projects'
              className='text-base leading-6 text-gray-100 hover:text-gray-400'
            >
              Projects
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#contact'
              className='text-base leading-6 text-gray-100 hover:text-gray-400'
            >
              Contact
            </a>
          </div>
        </nav>
        <div className='flex justify-center mt-8 space-x-6'>
          <a
            href='https://www.linkedin.com/in/brandon-thompson-a7099720/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}
          >
            <FaLinkedinIn
              className='cursor-pointer text-gray-100 hover:text-gray-400'
              size={20}
            />
          </a>
          <a
            href='https://github.com/BJThompson12'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}
          >
            <FaGithub
              className='cursor-pointer text-gray-100 hover:text-gray-400'
              size={20}
            />
          </a>
          <a href={pdf} download={pdf} style={{ textDecoration: 'none' }}>
            <FaDownload
              className='cursor-pointer text-gray-100 hover:text-gray-400'
              size={20}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
