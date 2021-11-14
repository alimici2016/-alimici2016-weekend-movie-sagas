import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SearchForm() {
    const dispatch = useDispatch();

    const [searchMovie, setSearchMovie] = useState("");

    const film = useSelector(store => store.searchMovieReducer)

    const history = useHistory();

    const handleChange = (e) => {
        setSearchMovie(e.target.value);
    };

    // const filmObject = {
    //     poster: 
    // }
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`Searching`);
        dispatch({ type: "SEARCH_MOVIES", payload: searchMovie });
        // dispatch({type: "ADD_MOVIE", payload:  })
        setSearchMovie("");
        history.push('/list')
    };
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchMovie}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );

}
export default SearchForm;