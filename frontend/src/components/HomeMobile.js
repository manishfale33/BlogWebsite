import React from 'react'

export default function Home_mobile(props) {
  return (
    <div>
      <div className="w-[350px] rounded-b-lg mt-8">
        <img src={props.image} alt="" className='h-84 ml-5 rounded-lg mt-1' />
        <p className="font-bold text-xl ml-5">
            {props.text}
        </p>
        <div className='flex font-semibold text-sm ml-5 mt-2' >
          <p >{props.name}</p>
          <p className='ml-12 '>{props.date}</p>
          </div>
      </div>
    </div>
  )
}
