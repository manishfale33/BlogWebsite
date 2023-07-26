import React from 'react'

export default function Carousel_middle_tablet(props) {
    return (
        <div>
                <div className="relative w-[600px] rounded-b-lg">
                    <img src={props.image} alt="" className='h-96 ml-8 rounded-lg mt-1' />
                    <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 left-8 w-full rounded-b-lg">
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
