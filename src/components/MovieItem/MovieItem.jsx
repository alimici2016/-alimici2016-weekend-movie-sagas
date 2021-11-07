import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({ type: 'SET_MOVIE', payload: movie })
        dispatch({ type: 'FETCH_GENRES', payload: movie })
        history.push('/detail')

    }
    //On click we dispatch two different places with the payload movie,
    //below we have the individual items, being rendered.
    return (
        <>
            <Paper
                sx={{
                   margin: 'auto'

                }}>
                <Container
                sx={{
                    margin: 1,
                    padding: 5,
                    '&:hover': {
                        opacity: [.8]
                    },
                    '& > :not(style)': {
                        m: .1,
                        width: 300,
                    },
                }}
                >
                <div>
                    <h1 key={movie.id}></h1>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster}
                        alt={movie.title}
                        onClick={handleClick} />
                </div>
                </Container>
        </Paper>
        </>
    )
};

export default MovieItem;