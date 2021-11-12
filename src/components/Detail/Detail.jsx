import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import { Card } from '@mui/material';

function Detail() {

    const history = useHistory();
    const movie = useSelector(store => store.movieId)
    const genres = useSelector(store => store.genres)

    console.log(genres)

    const handleBack = () => {
        history.push('/list')
    }

    //Accessing multiple stores to iterate first genre and then render each movie with it's genre

    return (
        <>

            <h1>{movie.title}</h1>
            <h3>{movie.director}</h3>
            <p> <span>{genres.map(genre => genre.name).join(' , ')}</span></p>

            <Paper
                sx={{
                    padding: 5,
                    width: 300,
                    margin: 'auto'

                }}
            >
                <img src={movie.poster} />
            </Paper>
            <Container >
                <Card>
                
                <h5>{movie.description}</h5>
                </Card>
            </Container>
            <Button onClick={handleBack}>Back</Button>


        </>
    )
}
export default Detail;