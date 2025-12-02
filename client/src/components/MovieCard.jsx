import React from 'react'
import { useNavigate } from 'react-router-dom'
import noimage from '../assets/images/no-image.png'
import Loading from './Loading';



const MovieCard = ({ category, data }) => {

    const navigate = useNavigate();
    return (
        <div className='my-12'>
            <h1 className='my-5 md:my-12 font-semibold text-lg md:text-xl'>{category ? category : ""}</h1>
            <div className='overflow-x-scroll no-scroll flex gap-5'>
                {data ?
                    data.map((d, i) => {
                        return <img onClick={() => navigate(`/netflix/${d.id}`, scrollTo(0, 0))} key={i} src={d.poster_path ? `https://image.tmdb.org/t/p/w500${d.poster_path}` : noimage} alt=""
                            className='hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out w-36 md:w-40 lg:w-48 xl:w-56 rounded-md border-2 border-gray-600' />
                    })
                    : <Loading />}
            </div>
        </div>
    )
}

export default MovieCard
