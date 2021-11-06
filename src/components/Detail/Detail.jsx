import {useSelector} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function Detail () {

    const movieId = useSelector(store => store.movieId)
    // const movies = useSelector(store => store.movie)

    // const movieSelect = movies.filter(movie => movie.id === movieId)
    

    useEffect(() => {
        // fetchMovie();
    }, [])

    // const fetchMovie = () => {
    //     axios({
    //         method: 'GET',
    //         url: `/api/movies/details?id=${id}`
    //     }).then ((response) => {
    //         console.log('response', response)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // };
    // console.log(movieId)

     return(
         <>
        <h1>{movieId.title}</h1>
        <img src={movieId.poster} />
        <p>{movieId.description}</p>
        
        </>
     )
}
export default Detail;