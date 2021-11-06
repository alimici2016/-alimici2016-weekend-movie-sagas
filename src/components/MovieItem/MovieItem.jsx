import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({ type: 'SET_MOVIE', payload: movie})
        history.push('/detail')

    }
    return (
        <>
            <h1 key={movie.id}></h1>
            <h3>{movie.title}</h3>
            <img src={movie.poster}
                alt={movie.title} />
            <button onClick={handleClick}>Click</button>
        </>
    )
};

export default MovieItem;