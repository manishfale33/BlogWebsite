import React from 'react'

export default function Carousel_1(props) {
  return (
    <div>
      <div className="relative w-[375px]  rounded-b-lg">
        <img src={props.image} alt="" className='h-48 w-96 lg:ml-14 rounded-lg' />
        <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 lg:left-14 w-full rounded-b-lg">
          <p className="text-gray-200 font-bold">
            {props.text}
          </p>
        </div>
      </div>


    </div>

  
  )
}
// for images use lazy loading



