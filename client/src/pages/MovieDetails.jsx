import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext';
import { useLocation, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import axios from 'axios';
import Movie from '../components/Movie';
import RelatedMovies from '../components/RelatedMovies';
import Navbar from '../components/Navbar';


const MovieDetails = () => {

    const { id } = useParams();
    const { API_KEY } = useContext(AppContext);
    const [data, setData] = useState();
    const [runTime, setRuntime] = useState('');
    const [date, setDate] = useState('');
    const [relatedMovies, setRelatedMovies] = useState([]);
    const [err, setErr] = useState('');
    const location = useLocation();

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const relatedMovieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;


    const handleMovieDetails = async () => {
        try {
            const { data } = await axios.get(url);
            setData(data);
            if (data) {
                handleReleaseDate(data?.release_date)
                handleRuntime(data?.runtime)
            }
        } catch (err) {
            setErr('Data Not Found')
            console.log(err)
        }
    };


    const handleReleaseDate = (date) => {
        switch (date?.split('-')[1]) {
            case '01': {
                setDate(date.split('-')[0] + ' ' + 'Jan' + ' ' + date.split('-')[2])
                break;
            }
            case '02': {
                setDate(date.split('-')[0] + ' ' + 'Feb' + ' ' + date.split('-')[2])
                break;
            }
            case '03': {
                setDate(date.split('-')[0] + ' ' + 'Mar' + ' ' + date.split('-')[2])
                break;
            }
            case '04': {
                setDate(date.split('-')[0] + ' ' + 'Apr' + ' ' + date.split('-')[2])
                break;
            }
            case '05': {
                setDate(date.split('-')[0] + ' ' + 'May' + ' ' + date.split('-')[2])
                break;
            }
            case '06': {
                setDate(date.split('-')[0] + ' ' + 'June' + ' ' + date.split('-')[2])
                break;
            }
            case '07': {
                setDate(date.split('-')[0] + ' ' + 'Jul' + ' ' + date.split('-')[2])
                break;
            }
            case '08': {
                setDate(date.split('-')[0] + ' ' + 'Aug' + ' ' + date.split('-')[2])
                break;
            }
            case '09': {
                setDate(date.split('-')[0] + ' ' + 'Sep' + ' ' + date.split('-')[2])
                break;
            }
            case '10': {
                setDate(date.split('-')[0] + ' ' + 'Oct' + ' ' + date.split('-')[2])
                break;
            }
            case '11': {
                setDate(date.split('-')[0] + ' ' + 'Nov' + ' ' + date.split('-')[2])
                break;
            }
            case '12': {
                setDate(date.split('-')[0] + ' ' + 'Dec' + ' ' + date.split('-')[2])
                break;
            }
            default: {
                break;
            }
        }
    };


    const handleRuntime = (time) => {

        if (time) {
            let hours = Math.floor(time / 60);
            let minutes = time % 60

            setRuntime(hours + ' ' + 'hrs' + ' ' + minutes + ' ' + 'mins');
        }
    };


    const handleRelatedMovies = async () => {
        try {
            const { data } = await axios.get(relatedMovieUrl);
            if (data) {
                let tempData = data.results.filter((r) => r.id !== id);
                setRelatedMovies(tempData);
            }
        } catch (err) {
            console.log(err);
            setErr('Data Not Found');
        }
    }

    useEffect(() => {
        handleMovieDetails();
        handleRelatedMovies();
    }, [id]);

    return (
        <div className='min-h-screen bg-gradient-to-bl from-red-950 to-black text-white overflow-y-scroll no-scroll relative z-0'>
            <Navbar location={location.pathname} id={id} />
            <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-8 md:mt-14 lg:mt-20'>
                {data ? <Movie data={data} date={date} runTime={runTime} /> : <Loading err={err} />}
                {relatedMovies ? <RelatedMovies data={relatedMovies.slice(0, 10)} /> : <Loading />}
            </div>
        </div>
    )
};

export default MovieDetails;
