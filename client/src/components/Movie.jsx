import React from 'react'
import MovieDesc from './MovieDesc'

const Movie = ({ data, date, runTime }) => {
    return (
        <div className='flex max-xl:flex-col flex-row items-start  mx-auto gap-5 pt-5 md:pt-8 lg:pt-12'>
            <div className='relative h-3/4'>
                <img src={`https://image.tmdb.org/t/p/w780${data?.backdrop_path}`} alt={data?.title} className='rounded-md shadow-md' />
                <img src={`https://image.tmdb.org/t/p/w780${data?.poster_path}`} alt="" className='w-16 sm:w-20 md:w-36 xl:w-48 absolute bottom-0 left-0 rounded-lg' />
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <MovieDesc data={data} runTime={runTime} />
                <p className='text-gray-400 font-medium mt-2 max-w-2xl'>Overview: <br /> <span className='font-semibold tracking-normal max-md:text-sm text-lg'>{data?.overview}</span></p>
                <p className='flex items-center self-start gap-1.5 text-gray-400 font-medium mt-2'><i className="fa-regular fa-calendar-days text-gray-500"></i>Released On:  <span className='font-semibold text-white text-sm '>{date}</span></p>

                <div className='flex flex-wrap items-center gap-5 self-start'>
                    <p className='font-bold text-gray-400'>Genres:</p>
                    {
                        data?.genres.map((g) => {
                            return <p className='font-semibold text-sm mt-0.5' key={g.id}>{g.name} </p>
                        })
                    }
                </div>
                <div className='flex flex-wrap items-center gap-5 self-start'>
                    <p className='font-bold text-gray-400'>Origin:</p>
                    {
                        data?.production_countries.map((g, i) => {
                            return <p className='font-semibold text-sm mt-0.5' key={i}>{g.name} </p>
                        })
                    }
                </div>
                <div className='flex flex-wrap items-center gap-5 self-start'>
                    <p className='font-bold text-gray-400'>Languages:</p>
                    {
                        data?.spoken_languages.map((g, i) => {
                            return <p className='font-semibold text-sm mt-0.5' key={i}>{g.name} </p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie;
