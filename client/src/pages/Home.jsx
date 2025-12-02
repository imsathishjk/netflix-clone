import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext.jsx';
import MovieCard from '../components/MovieCard.jsx';
import Loading from '../components/Loading.jsx';
import Navbar from '../components/Navbar.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [categoryId, setCategoryId] = useState('');

    const { genre, top, trendings, upcoming, webSeries, tvseries } = useContext(AppContext);




    useEffect(() => {
        if (categoryId.trim().length) {
            navigate(`/netflix/category/${categoryId}`)
        }
    }, [categoryId]);


    return (
        <div className='min-h-screen bg-gradient-to-bl from-red-950 to-black text-white overflow-auto relative z-0'>
            <Navbar location={location.pathname} />
            <div className='flex items-center max-md:flex-col flex-row gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-8 md:mt-14 lg:mt-20 xl:mt-28'>
                <p className='lg:block hidden font-semibold text-gray-400'>Choose Genre:</p>
                {genre ? <select onChange={(e) => setCategoryId(e.target.value)} className='cursor-pointer max-md:self-start boder border-gray-500 bg-gradient-to-l from-red-800 to-red-600 p-2 text-white font-semibold rounded-md text-sm'>
                    {
                        genre?.map((g) => {
                            return <option value={g.id} title={g.name} className='font-bold text-sm text-red-700' key={g.id} >{g.name}</option>
                        })
                    }
                </select> : <Loading />}

            </div>
            <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
                <MovieCard category={'Trending Movies'} data={trendings} />
                <MovieCard category={'Top Rated Movies'} data={top} />
                <MovieCard category={'Upcoming Movies'} data={upcoming} />
                <MovieCard category={'Trending Webseries'} data={webSeries} />
                <MovieCard category={'Top TV series'} data={tvseries} />
            </div>

        </div>
    )
}

export default Home

