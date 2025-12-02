import React from 'react'
import MovieCard from './MovieCard'
import Loading from './Loading'

const RelatedMovies = ({ data }) => {

    return (
        <>
            <MovieCard data={data} category={'Related Movies'} />
        </>
    )
}

export default RelatedMovies
