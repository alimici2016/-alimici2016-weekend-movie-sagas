function MovieItem({movie}) {

    return (
        <>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
            <button onClick={() => dispatch({ type: 'SET_MOVIE', payload: movie.id })}>Click</button>
        </>
    )
}

export default MovieItem;