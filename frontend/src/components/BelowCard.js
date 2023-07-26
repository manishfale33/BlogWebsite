import React,{useState} from 'react'

export default function BelowCard(props) {
  const [Title, setTitle] = useState("")

  const ArticleTitle = (event) => {
    setTitle(event.target.value)
  }
  return (
    <div className='text-font_color'>
      <div className="rounded-b-lg grid justify-items-center">
        <img src={props.image} alt="" className='mt-10 rounded-lg h-48 w-96' />
        <p className='flex text-start justify-center w-96 font-bold'>{props.text}</p>
      </div>
      <div>
      <div className='ml-8 py-2 flex font-bold'>
      <p className=''>{props.name}</p>
      <p className='ml-14'>{props.date}</p>
      </div>
      </div>
    </div>
  )
}
