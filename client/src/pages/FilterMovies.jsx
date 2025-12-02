import React, { useContext, useEffect, useState } from 'react'
import { data, useLocation, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AppContext from '../context/AppContext';
import Category from '../components/Category';
import axios from 'axios';
import Loading from '../components/Loading';

const FilterMovies = () => {

    const [filteredData, setFilteredData] = useState(null);
    const { categoryId } = useParams();
    const [categoryName, setCategoryName] = useState('');
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const { API_KEY, genre } = useContext(AppContext);

    const location = useLocation();


    const handleSearchData = async () => {
        try {
            const url = `https://api.themoviedb.org/3/search/multi?query=${query.trim()}&api_key=${API_KEY}&include_adult=false&language=en-US&page=${page}`;
            const { data } = await axios.get(url);
            if (data) {
                setFilteredData(data.results);
                setQuery('');
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleFilter = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=${API_KEY}&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${categoryId}`)
            setFilteredData(data.results);
        } catch (err) {
            console.log(err)
        }
    };

    const handleCategoryName = () => {
        let name = genre?.filter((g) => g.id == categoryId);
        name && setCategoryName(name[0].name);
    }

    useEffect(() => {
        handleFilter();
        handleCategoryName();
    }, [categoryId, page]);


    return (
        <div className='min-h-screen bg-gradient-to-bl from-red-950 to-black text-white overflow-hidden relative z-0'>
            <Navbar location={location.pathname} categoryId={categoryId} />

            <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-28'>
                {categoryName && (<h1 className='font-semibold text-lg md:text-xl text-gray-500'>Results for : <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-l from-red-500 to-red-600'>{categoryName}</span> </h1>)}

                <div className='border-2 mt-5 flex-1 max-w-lg w-full flex items-center  border-red-700 py-2 px-3 rounded-full placeholder:text-gray-500'>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} className='w-full outline-none' type="text" placeholder='Search your favorites..' />
                    <i onClick={handleSearchData} className="fa-solid fa-magnifying-glass cursor-pointer text-gray-500"></i>
                </div>
                <div className='mt-5 flex gap-5 justify-end items-center'>
                    {
                        page == 1 ? '' : <button onClick={() => setPage(page - 1)} className='font-bold text-sm md:text-lg cursor-pointer'>Prev<i className="fa-solid fa-angle-left"></i></button>
                    }
                    <button onClick={() => setPage(page + 1)} className='font-bold text-sm md:text-lg cursor-pointer'>Next<i className="fa-solid fa-angle-right"></i></button>
                </div>
                <Category data={filteredData} />
            </div>

        </div>
    )
}

export default FilterMovies
