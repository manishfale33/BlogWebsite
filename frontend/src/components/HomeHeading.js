import React from 'react'
import {Link} from "react-router-dom";

export default function HomeHeading() {
    return (
        // <div>
        //     <p className='pl-14 pt-12 tracking-tight '>Home &gt; Our top stories</p>
        //     <h1 className='pl-14 pt-10 text-3xl text-[#196562] font-bold underline decoration-solid tracking-wide'>Our Top Stories</h1>
        //     <Link to="/Heading">hello</Link>
        // </div>
        <div>
            <p className='ml-4 text-sm lg:ml-24 sm:mt-10 tracking-tight '>Home &gt; Our top stories</p>
            <h1 className='ml-4 text-2xl lg:ml-24 sm:mt-4 sm:text-4xl text-[#196562] font-bold underline decoration-solid tracking-wide text-font_color '>Our Top Stories</h1>
            <Link to="/Heading">article view</Link>
        </div>
    )
}
