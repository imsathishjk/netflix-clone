import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-8 items-center justify-center h-[90vh] max-sm:px-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl max-w-xl text-wrap text-center font-extrabold'>Unlimited movies, shows, and more</h1>
            <p className='font-semibold'>Starts at <span className='font-bold text-red-500 text-lg'>₹149</span>. Cancel at any time.</p>
            <p className='font-semibold max-sm:text-center'>Ready to watch? Click below</p>
            <button onClick={() => navigate('/netflix', scrollTo(0, 0))} className='bg-red-600 p-3 rounded border-none cursor-pointer font-bold  p-3'>Explore All</button>
        </div>
    )
}

export default Hero
