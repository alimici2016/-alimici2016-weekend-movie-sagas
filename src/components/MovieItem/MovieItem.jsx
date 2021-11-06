import { useDispatch } from "react-redux";
function MovieItem({movie}) {

    const dispatch = useDispatch();
    return (
        <>
            <h1 key={movie.id}></h1>
            <h3>{movie.title}</h3>
            <img src={movie.poster} 
            alt={movie.title} />
            <button onClick={() => dispatch({ type: 'SET_ID', payload: movie })}>Click</button>
        </>
    )
};

export default MovieItem;