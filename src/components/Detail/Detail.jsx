import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { margin } from '@mui/system';

function Detail() {

    const movie = useSelector(store => store.movieId)
    const genres = useSelector(store => store.genres)

    console.log(genres)

    return (
        <>
              
                <h1>{movie.title}</h1>
                <p> <span>{genres.map(genre => genre.name).join(' , ')}</span></p>
              
                <Paper
                sx={{ 
                    // margin: 1,
                    padding: 5,
                    width: 300,
                    margin: 'auto'

                }}
                 >
                <img src={movie.poster} />
                </Paper>
                <h5>{movie.description}</h5>

           
        </>
    )
}
export default Detail;