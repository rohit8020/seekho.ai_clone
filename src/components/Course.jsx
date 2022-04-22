import React from 'react'

function Course({img,description,title,videos}) {
  // console.log(description)
  return (
    <div className='bg-gray-100 p-2 sm:p-4 rounded-lg w-[200px] sm:w-[330px] flex flex-col gap-2 border'>
      <p className='font-bold text-xl heading_color h-7 overflow-y-hidden'>{title.substr(0,25)}{title.length > 25 && '...'}</p>
      <p className='text-xs -mt-2 text-gray-500'>
        {`Video Count - ${videos}`}
      </p>
      <div className=''>
        <img className='border rounded-lg h-36 w-full' src={img} alt="this is image" />
      </div>
      <p className='text-xs text-gray-500 h-12 overflow-y-auto'>
        {description.substr(0,120)}
        {description.length > 120 ? '...' : ''}
      </p>
      <button className='home-page-btn text-xs sm:text-sm'>Enroll Now</button>
    </div>
  )
}

export default Course