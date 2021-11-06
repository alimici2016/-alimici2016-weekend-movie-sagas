import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function Detail() {

    const movie = useSelector(store => store.movieId)
    const genres = useSelector(store => store.genres)

    useEffect(() => {
        // fetchMovie();
    }, [])

    return (
        <>
            <div>
                <h1>{movie.title}</h1>
                <img src={movie.poster} />
                <p>{movie.description}</p>
            </div> 
            <p>Genres: <span>{genres.map(genre => genre.name).join(' , ')}</span></p>
        </>
    )
}
export default Detail;