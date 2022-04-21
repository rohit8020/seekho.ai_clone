import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';
import CustomLink from '../CustomLink';

const Navbar = () => {
  const AcademicsLinks = [
    {
      label: 'Finance',
      href: '',
    },
    {
      label: 'Digital Marketing',
      href: '',
    },
    {
      label: 'Consultation',
      href: '',
    },
    {
      label: 'Entrepreneurship',
      href: '',
    },
    {
      label: 'Product Management',
      href: '',
    },
    {
      label: 'Supply Chain Management',
      href: '',
    },
    {
      label: 'Personal Development',
      href: '',
    },
    {
      label: 'HR Management',
      href: '',
    },
    {
      label: 'Analytics & Data Science',
      href: '',
    },
  ];

  return (
    <nav className='flex justify-between items-center py-[15px] px-8 md:px-[90px] gap-4 border-b border-gray-300 shadow-md shadow-slate-600'>
      <div className='flex gap-2 items-center'>
        <img
          src='https://www.seekho.ai/assets/images/newSeekhoLogo.webp'
          className='w-[120px] md:w-[150px]'
          alt='Site Logo'
        />
        {/* Academics start */}

        <Popover className='relative hidden md:block'>
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group pl-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span>Academics</span>
                <ChevronDownIcon
                  className={`${open ? '' : 'text-opacity-70'}
                  text-pink-500 ml-1 mt-1 h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden='true'
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute z-10 w-72 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl'>
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='p-4 bg-gray-50 flex flex-col'>
                      {AcademicsLinks.map((item, index) => (
                        <>
                          <div className=''>
                            <CustomLink
                              key={index}
                              className='flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md text-gray-750 hover:text-pink-500 cursor-pointer hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                              to={item.href}
                            >
                              {item.label}
                            </CustomLink>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* Academics end */}
      </div>
      <div className='gap-6 items-center hidden md:flex'>
        <ul className='flex gap-3 items-center'>
          <li>SeekhoX</li>
          <li>Discussions</li>
          <li>Talentboard</li>
        </ul>
        <button className='home-page-btn'>Login</button>
        <div>ICON</div>
      </div>
    </nav>
  );
};

export default Navbar;
