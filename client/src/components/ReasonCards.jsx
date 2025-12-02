import React from 'react'

const ReasonCards = () => {
    return (
        <div className='max-w-6xl mx-auto w-full pt-12 pb-5 px-4 sm:px-8 md:px-14 lg:px-20 xl:px-24 bg-black'>
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold'>Reasons to join</h1>
            <div className='flex gap-5 mt-12 flex-wrap lg:flex-nowrap'>
                <div className='bg-gradient-to-b border border-gray-700 grow from-black to-red-950 flex flex-col gap-3 rounded-md p-3'>
                    <h1 className='lg:text-xl font-semibold'>Enjoy on your TV</h1>
                    <p className='text-sm lg:text-lg font-semibold text-gray-400'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='bg-gradient-to-b border border-gray-700 grow from-black to-red-950 flex flex-col gap-3 rounded-md p-3'>
                    <h1 className='lg:text-xl font-semibold'>Download your shows to watch offline</h1>
                    <p className='text-sm lg:text-lg font-semibold text-gray-400'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='bg-gradient-to-b border border-gray-700 grow from-black to-red-950 flex flex-col gap-3 rounded-md p-3'>
                    <h1 className='lg:text-xl font-semibold'>Watch everywhere</h1>
                    <p className='text-sm lg:text-lg font-semibold text-gray-400'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='bg-gradient-to-b border border-gray-700 grow from-black to-red-950 flex flex-col gap-3 rounded-md p-3'>
                    <h1 className='lg:text-xl font-semibold'>Create profiles for kids</h1>
                    <p className='text-sm lg:text-lg font-semibold text-gray-400'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>

            </div>
        </div>
    )
}

export default ReasonCards
