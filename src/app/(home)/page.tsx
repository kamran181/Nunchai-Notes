import Link from 'next/link';
import React from 'react'
import { Navbar } from './navbar';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed top-0 right-0 left-0 z-10 h-16 bg-white p-4'>
        <Navbar/>
      </div>
      <div className='mt-16'>
         <h5>Please <Link href={'/documents/234'}><span className='text-blue-500 underline'>Click Here</span></Link> to go to documents id page</h5>     
      </div>
    </div>
  )
}

export default Home