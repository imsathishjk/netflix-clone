import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { AppContextProvider } from './context/AppContext';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import FilterMovies from './pages/FilterMovies';

const App = () => {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/netflix' element={<Home />} />
          <Route path='/netflix/:id' element={<MovieDetails />} />
          <Route path='/netflix/category/:categoryId' element={<FilterMovies />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
