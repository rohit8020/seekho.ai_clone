import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'rgb(248,248,248)',
      }}
      className='px-8 md:px-24 '
    >
      <div className='py-20 flex flex-col md:flex-row gap-4 justify-between'>
        <div className='flex flex-col gap-3'>
          <img
            src='https://www.seekho.ai/assets/images/newSeekhoLogo.webp'
            width='220px'
            alt='Site Logo'
          />
          <div className='flex gap-2'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold text-gray-700'>Academies</p>
          <ul className='text-gray-700'>
            <li className='hovered_color' >Product Management</li>
            <li className='hovered_color' >Consulting</li>
            <li className='hovered_color' >Finance</li>
            <li className='hovered_color' >Digital Marketing</li>
            <li className='hovered_color' >Supply Chain Management</li>
            <li className='hovered_color' >Entrepreneurship</li>
            <li className='hovered_color' >Personal Development</li>
            <li className='hovered_color' >HR Management</li>
            <li className='hovered_color' >Analytics &amp; Data Science</li>
          </ul>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold text-gray-700'>Explore</p>
          <ul className='text-gray-700'>
            <li className='hovered_color' >LIVE Events</li>
            <li className='hovered_color' >Series</li>
            <li className='hovered_color' >Finance</li>
            <li className='hovered_color' >Courses</li>
            <li className='hovered_color' >Job Opportunities</li>
            <li className='hovered_color' >Quizzes</li>
          </ul>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold text-gray-700'>Company</p>

          <ul className='text-gray-700'>
            <li className='hovered_color' >SeekhoX</li>
            <li className='hovered_color' >About Us</li>
            <li className='hovered_color' >Finance</li>
            <li className='hovered_color' >Blog</li>
            <li className='hovered_color' >Terms of Service</li>
            <li className='hovered_color' >Privacy Policy</li>
          </ul>
        </div>

        <div className='w-full md:w-1/5 flex flex-col gap-2 text-gray-700'>
          <p className='font-bold'>Get in touch</p>
          <p className='hovered_color' >
            Seekify Technologies Private Limited, 2nd Floor, C-46, Neeti Bagh,
            South Delhi, Delhi, India, 110049
          </p>
          <div className='flex gap-2 mt-2 items-center justify-start'>
            <img
              src='https://www.seekho.ai/assets/images/home-page/emailIcon.svg'
              className=''
              alt='email icon'
            />
            <span className='hovered_color' >support@seekho.ai</span>
          </div>
        </div>
      </div>

      <hr />
      <div className='hovered_color py-6 text-center text-sm text-gray-700'>
        © Copyright 2022 SEEKHO. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
