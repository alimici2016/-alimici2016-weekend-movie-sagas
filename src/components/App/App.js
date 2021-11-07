import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm'
import Detail from '../Detail/Detail'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'


function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FIND_GENRE' });
  // }, [])

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path = '/detail'>
        <Detail />  
        </Route>

        <Route path='/form'>
        <MovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
