import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import ReasonCards from '../components/ReasonCards';

const Landing = () => {

    const { setShowLogin, showLogin, images } = useContext(AppContext);




    return (
        <div className='banner w-[100vw] min-h-screen z-0 relative text-white'>;
            <div className='bg-gradient-to-t from-black/60 to-black/70 w-screen min-h-screen z-10 absolute top-0'>
                <Navbar />
                <Hero />
                <div className='bg-black'>
                    <Trending images={images} />
                    <ReasonCards />
                </div>
            </div>
            {showLogin && (<Login />)}
        </div>
    )
};

export default Landing;
