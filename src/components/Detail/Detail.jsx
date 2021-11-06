import {useSelector} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function Detail () {

    const movie = useSelector(store => store.movieId)

    useEffect(() => {
        // fetchMovie();
    }, [])

     return(
         <>
        <h1>{movie.title}</h1>
        <img src={movie.poster} />
        <p>{movie.description}</p>
        
        </>
     )
}
export default Detail;