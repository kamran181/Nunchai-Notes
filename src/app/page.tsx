import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
    <h5>Please <Link href={'/documents/234'}><span className='text-blue-500 underline'>Click Here</span></Link> to go to documents id page</h5>
    </div>
  )
}

export default Home