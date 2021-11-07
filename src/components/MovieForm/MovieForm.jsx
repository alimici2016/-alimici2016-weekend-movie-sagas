import axios from 'axios';
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

function MovieForm() {

    const genres = useSelector(store => store.allGenres)

    const history = useHistory();

    const dispatch = useDispatch();

    const [movie, setMovie] = useState({
        title:'',
        poster:'',
        description:'',
        genre_id:''
    });

    const handleChange = (event, property) => {
        setMovie({ ...movie, [property]: event.target.value})
    };

    const addMovie = (event) => {
        event.preventDefault();
        dispatch({type: "ADD_MOVIE", payload: movie })
        // history.push('/');
    };

    return (
        <>
        <h3>Submit your own!</h3>
        <div>
            <form onSubmit={addMovie}>
            <input
            onChange={(event) => handleChange(event, 'title')}
            type ="text"
            placeholder="title"
            value={movie.title}
            >
            </input>
            <input
            onChange={(event) => handleChange(event, 'poster')}
            type ="text"
            placeholder="url"
            value={movie.poster}
            >
            </input>
            <input
            onChange={(event) => handleChange(event, 'description')}
            type ="text"
            placeholder= "description"
            value={movie.description}
            >
            </input>
            <select
            // value={genre_id}
            onChange={handleChange}>
              <option value="">Choose a category</option>
              <option value={1}>Adventure</option>
              <option value={2}>Animated</option>
              <option value={3}>Biographical</option>
              <option value={4}>Comedy</option>
              <option value={5}>Disaster</option>
              <option value={6}>Drama</option>
              <option value={7}>Epic</option>
              <option value={8}>Fantasy</option>
              <option value={9}>Musical</option>
              <option value={10}>Romantic</option>
              <option value={11}>Science Fiction</option>
              <option value={12}>Space-Opera</option>
              <option value={13}>Superhero</option>
            <button type= "submit">Submit</button>
            </select>
            </form>
        </div>
        </>
    )

};

export default MovieForm