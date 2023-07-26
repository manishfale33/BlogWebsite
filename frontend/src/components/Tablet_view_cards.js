import React from 'react'

export default function Tablet_view_cards(props) {
  return (
    <div>
      <div className='text-font_color flex justify-center items-center flex-col'>
      <div className="rounded-b-lg ml-8 flex items-center">
        <div>
        <img src={props.image} alt="" className='mt-10 rounded-lg h-48 w-96' />
        </div>
        <div>
        <p className='flex w-96 font-bold ml-4'>{props.text}</p>
        <div className='flex ml-4 my-4'>
        <p className='flex'>{props.name}</p>
        <p className='ml-14'>{props.date}</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
