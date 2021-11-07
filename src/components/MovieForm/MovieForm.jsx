import axios from 'axios';
import { useState } from 'react'

function MovieForm() {

    const [movie, setMovie] = useState({})

    // const postData = () => {
    //     axios({
    //         method: 'POST',
    //         url: '/api/movie',
    //         data: movie
    //     }).then((response) => {
    //         console.log(response)
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: "ADD_MOVIE", payload: movie })
        history.push('/');
    };

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
            <input
            className="input"
            onChange={(event) => setMovie(event.target.value)}
            type ="text"
            value={movie.title}
            >
            </input>
            <input
            className="input"
            onChange={(event) => setMovie(event.target.value)}
            type ="text"
            value={movie.poster}
            >
            </input>
            <input
            className="input"
            onChange={(event) => setMovie(event.target.value)}
            type ="text"
            value={movie.description}
            >
            </input>
            <button onClick={ }></button>
            </form>
        </div>
    )

};

export default MovieForm