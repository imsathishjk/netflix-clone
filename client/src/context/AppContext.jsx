import { createContext, useEffect, useState } from "react";
import image1 from '../assets/images/movie 1.jpg';
import image2 from '../assets/images/movie 2.jpg';
import image3 from '../assets/images/movie 3.jpg';
import image4 from '../assets/images/movie 4.jpg';
import image5 from '../assets/images/movie 5.jpg';
import image6 from '../assets/images/movie 6.jpg';
import image7 from '../assets/images/movie 7.jpg';
import image8 from '../assets/images/movie 8.jpg';
import image9 from '../assets/images/movie 9.jpg';
import image10 from '../assets/images/movie 10.jpg';
import axios from 'axios';


const AppContext = createContext();




export const AppContextProvider = ({ children }) => {
    const [genre, setGenre] = useState();
    const [top, setTop] = useState([]);
    const [trendings, setTrendings] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [webSeries, setWebSeries] = useState([]);
    const [tvseries, setTVseries] = useState([]);
    const [showLogin, setShowLogin] = useState(false);
    const [query, setQuery] = useState('');
  


    const images = [image1, image4, image3, image2, image5, image7, image6, image8, image9, image10];

    const API_KEY = '918de6c21cc2c82711bff75f429cd4d3';


    const fetchGenres = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?include_adult=true&api_key=${API_KEY}&language=en`)
            setGenre(data.genres);
        } catch (err) {
            console.log(err)
        }
    };


    const fetchTopRated = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?include_adult=true&api_key=${API_KEY}&language=en-US&page=1`);
            setTop(data.results);
        } catch (err) {
            console.log(err)
        }
    }


    const trending = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?include_adult=true&api_key=${API_KEY}&language=en-US&page=1`)
            setTrendings(data.results);
        } catch (err) {
            console.log(err)
        }
    };

    const upcomingMovies = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?include_adult=true&api_key=${API_KEY}&language=en-US&page=1`)
            setUpcoming(data.results)
        } catch (err) {
            console.log(err)
        }
    };

    const fetchWebseries = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?include_adult=true&api_key=${API_KEY}&language=en-US`)
            setWebSeries(data.results);
        } catch (err) {
            console.log(err)
        }
    }

    const topTVseries = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?include_adult=true&api_key=${API_KEY}&language=en-US&page=1`)
            setTVseries(data.results);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchGenres();
        fetchTopRated();
        trending();
        upcomingMovies();
        fetchWebseries();
        topTVseries();
    }, []);

    const value = {
        showLogin, setShowLogin, images, genre, top, trendings, upcoming, webSeries, tvseries, API_KEY}

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
};


export default AppContext;