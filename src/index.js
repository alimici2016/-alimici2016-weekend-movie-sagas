import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres)
    yield takeEvery('ADD_MOVIE', addMovie) //saga for when I want to add a movie this takes us to the addMovie function
    yield takeEvery ('DELETE_MOVIE', deleteMovie)
};

function* deleteMovie() {
    try{
        yield axios.delete(`/api/movie/${action.payload.id}`)
        yield put({ type: 'FETCH_MOVIES' })
    }catch{
        console.log('ERROR IN DELETE', error);
        yield put({ type: 'DELETE_ERROR' })
    }
}


function* addMovie(action) {//add move takes in the action that was dispatched to post to the database, then rerender the movies
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({ type: 'FETCH_MOVIES' })
    } catch (error) {
        console.log('ERROR IN POST', error);
        yield put({ type: 'POST_ERROR' })
    }
}


function* fetchGenres(action) {
    try {
        let movie = action.payload
        const response = yield axios.get(`/api/genre/details?id=${movie.id}`)
        yield put({ type: 'SET_GENRES', payload: response.data })
    } catch (err) {
        console.log(err)
    }
}


function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

};


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movieId = (state = {}, action) => {

    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }

};


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieId,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
