import { useState } from 'react'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function MovieForm() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [movie, setMovie] = useState({
        title:'',
        poster:'',
        description:'',
        genre_id:'',
        director:''
    });

    const handleChange = (event, property) => {
        setMovie({ ...movie, [property]: event.target.value})
    };

    const addMovie = (event) => {
        event.preventDefault();
        dispatch({type: "ADD_MOVIE", payload: movie })
        history.push('/list');
    };

    const handleCancel = () => {
        history.push('/')
    }

    return (
        <>
        <h3>Submit your own!</h3>
        <div>
            <form onSubmit={addMovie}>
            <TextField id="outlined-basic" placeholder="title" variant="filled" 
            onChange={(event) => handleChange(event, 'title')}
            type ="text"
            value={movie.title}
            />
             <TextField id="outlined-basic" placeholder= "director" variant="filled"
            onChange={(event) => handleChange(event, 'director')}
            type ="text"
            value={movie.director}
            />
            <TextField id="outlined-basic" placeholder="url" variant="filled" 
            onChange={(event) => handleChange(event, 'poster')}
            type ="text"
            value={movie.poster}
            />
            <TextField id="outlined-basic" placeholder= "description" variant="filled"
            onChange={(event) => handleChange(event, 'description')}
            type ="text"
            value={movie.description}
            />
           <Select
            onChange={() => handleChange(event, 'genre_id')}>
             <MenuItem value="">Choose a category</MenuItem>
             <MenuItem value={1}>Adventure</MenuItem>
             <MenuItem value={2}>Animated</MenuItem>
             <MenuItem value={3}>Biographical</MenuItem>
             <MenuItem value={4}>Comedy</MenuItem>
             <MenuItem value={5}>Disaster</MenuItem>
             <MenuItem value={6}>Drama</MenuItem>
             <MenuItem value={7}>Epic</MenuItem>
             <MenuItem value={8}>Fantasy</MenuItem>
             <MenuItem value={9}>Musical</MenuItem>
             <MenuItem value={10}>Romantic</MenuItem>
             <MenuItem value={11}>Science Fiction</MenuItem>
             <MenuItem value={12}>Space-Opera</MenuItem>
             <MenuItem value={13}>Superhero</MenuItem>
            
              </Select>
            <Button type= "submit">Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
            </form>
        </div>
        </>
    )

};

export default MovieForm;