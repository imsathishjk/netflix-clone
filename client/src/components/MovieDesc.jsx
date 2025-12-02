import React from 'react'

const MovieDesc = ({data, runTime}) => {
    return (
        <div className='flex flex-col items-start gap-5'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-red-500 to-red-600'>{data?.title}</h1>
            <div className='flex gap-5 md:text-nowrap items-center'>
                <span className='text-lg font-bold text-gray-600'>|</span>
                <button className='text-sm font-bold  text-green-500' >{data?.adult == false ? '16+' : '18+'}</button>
                <span className='text-lg font-bold text-gray-600'>|</span>
                <span className='text-sm font-semibold'>{runTime}</span>
                <span className='text-lg font-bold text-gray-600'>|</span>
                <span className='text-sm font-semibold'>Ratings: {Math.round(data?.vote_average)}</span>
            </div>
        </div>
    )
}

export default MovieDesc;