import React from 'react'
import { Link } from "react-router-dom";
import images from '../images';
import Navbar from '../components/Navbar';

export default function heading() {
  return (
    <div className='text-font_color'>
      <Navbar/>
      <div className=''>
        <p className='mt-6 ml-1 md:ml-24 lg:ml-[320px] sm:pt-12 sm:tracking-tight text-black'>Category &gt; Geo Politics</p>
        <h1 className='mt-4 ml-1 md:ml-24 lg:ml-[320px] sm:pt-8 sm:tracking-wider font-bold sm:text-3xl text-font_color md:w-[580px]'>Design & Develop BERT Question Answering model<br />
          explanations with visualization</h1>
        <p className='mt-4 ml-1 md:ml-24 lg:ml-[320px] sm:mt-8 tracking-tight'>23 May 2023</p>
        <div className='md:ml-24  lg:flex lg:justify-center'>
        <img src={images.img3} alt="" className='mt-4 mx-1 w-11/12 lg:h-[400px] sm:mt-12 lg:w-7/12 sm:flex lg:justify-center lg:align-center lg:mr-[120px] rounded-lg' />
        </div>
        <div className='flex justify-center'>
        <p className='tracking-tight mx-1 sm:mt-12 sm:tracking-normal md:w-[650px] lg:w-[800px] md:ml-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>

        <div className='mx-1 mt-4 flex justify-between sm:mx-24 lg:mx-[330px] sm:mt-12'>
          <h2 className=''>by yashvardhan jadhav</h2>
          <h2>1259 likes</h2>
        </div>
      </div>

      <Link to="/">home</Link>
    </div>
  )
}
