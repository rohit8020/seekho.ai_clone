import React from 'react'

function Course({img,description,title,videos}) {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <p className='font-bold text-2xl heading_color'>{title}</p>
      <div className=' max-h-fit'>
        <img className='rounded-lg h-36 w-full' src={img} alt="this is image" />
      </div>
      <p className='hovered_color'>
        {
          description.substr(60)
        }
        {
          description.length > 60 && '...'
        }
      </p>
      <p className='heading_color'>
        {`Video Count : ${videos}`}
      </p>

    </div>
  )
}

export default Course