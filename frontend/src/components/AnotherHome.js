import React from 'react'

export default function AnotherHome(props) {
  return (
    <div>
      <div className="relative w-[750px] rounded-b-lg">
                    <img src={props.image} alt="" className='h-[600px] ml-24 rounded-lg my-5' />
                    <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 left-24 w-full rounded-b-lg">
                        <p className="text-gray-200 font-bold text-2xl my-2">
                            {props.text}
                        </p>
                        <div className='flex font-semibold text-white text-sm' >
                            <p>{props.name}</p>
                            <p className='ml-2 '>{props.date}</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}
