import {useSelector} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function Detail () {

    const id = useSelector(store => store.movieId)

    useEffect(() => {
        fetchMovie();
    }, [])

    const fetchMovie = () => {
        axios({
            method: 'GET',
            url: `/api/movies/details?id=${id}`
        }).then ((response) => {
            console.log('response', response)
        }).catch((err) => {
            console.log(err)
        })
    };
    // console.log(movieId)

     return(
        <h1></h1>
     )
}
export default Detail;