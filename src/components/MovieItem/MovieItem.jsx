import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { useSelector } from 'react-redux'

function MovieItem({ movie }) {

    const film = useSelector(store => store.searchMovieReducer)

    const dispatch = useDispatch();
    const history = useHistory();

    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleDelete = () => {
        dispatch({ type: 'DELETE_MOVIE', payload: movie })
    }

    const handleClick = () => {
        dispatch({ type: 'SET_MOVIE', payload: movie })
        dispatch({ type: 'FETCH_GENRES', payload: movie })
        history.push('/detail')

    }
    //On click we dispatch two different places with the payload movie,
    //below we have the individual items, being rendered.
    return (
        <>



            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div>
                    <Card sx={{ width: 280, margin: 2, padding: 5 }}>
                        <h5> {movie.title}</h5>
                        <CardMedia
                            component="img"
                            height="430"
                            image={movie.poster}
                            onClick={handleFlip}
                        />
                    </Card>
                </div>

                <div>
                    <Card sx={{ width: 280, margin: 2, padding: 5 }}>
                        <h2> {movie.title}</h2>
                        <h3> Director: {movie.director}</h3>
                        <CardMedia
                            // component="img"
                            height="200"
                            margin='15'
                            onClick={handleFlip}
                        />
                        <CardActions>
                            <Button onClick={handleClick} size="small">Learn More</Button>
                            <Button onClick={handleDelete} size="small">Delete</Button>
                        </CardActions>
                    </Card>
                </div>
            </ReactCardFlip>

            <div>
                <h1>{film.Title}</h1>
                <h2>{film.Director}</h2>
                <p>{film.Genre}</p>
                <img src={film.Poster}
                // alt='Guardians of the Galaxy Vol.2'
                >

                </img>
            </div>


        </>
    )
};

export default MovieItem;