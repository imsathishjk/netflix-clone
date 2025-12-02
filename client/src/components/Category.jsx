import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import noimage from '../assets/images/no-image.png';

const Category = ({ data }) => {

    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center my-8 gap-8 '>
            {
                data ? data.map((d, i) => {
                    return <img onClick={() => navigate(`/netflix/${d.id}`, scrollTo(0, 0))} key={i} src={d.poster_path ? `https://image.tmdb.org/t/p/w500${d.poster_path}` : noimage}
                        className={`rounded-lg w-52 h-full ${d.poster_path ? 'h-full' : 'h-fit'} hover:scale-105 duration-300 ease-in-out cursor-pointer border-2 border-gray-500`} alt="" />
                }) : <Loading />
            }
        </div>
    )
}

export default Category
