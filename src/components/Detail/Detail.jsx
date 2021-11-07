import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Detail() {

    const movie = useSelector(store => store.movieId)
    const genres = useSelector(store => store.genres)

    console.log(genres)

    return (
        <>
             <Paper>
                <Box
                    sx={{
                        margin: 'auto',
                        padding: 'auto',
                        backgroundColor: 'tan',
                        display: 'flex',
                        align: 'center',
                        '& > :not(style)': {
                            m: 5,
                            width: 300,
                        },
                    }}
                >
                <div>
                <h1>{movie.title}</h1>
                </div>
                <img src={movie.poster} />
                <p>{movie.description}</p>
            
            </Box>
            </Paper>
            <p> <span>{genres.map(genre => genre.name).join(' , ')}</span></p>
        </>
    )
}
export default Detail;