import React from 'react'

export default function Carousel_midde(props) {
  return (
    <div>
      <div className="relative w-[450px] rounded-b-lg">
        <img src={props.image} alt="" className='h-[408px] w-full ml-14 rounded-lg ' />
        <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 left-14 w-full rounded-b-lg">
          <p className="text-gray-200 font-bold text-2xl">
            {props.text}
          </p>
          <div className='flex font-semibold text-white text-sm' >
          <p >{props.name}</p>
          <p className='ml-2 '>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
