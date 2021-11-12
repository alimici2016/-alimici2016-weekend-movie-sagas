import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm'
import Header from '../Header/Header';
import Detail from '../Detail/Detail'
import Button from '@mui/material/Button';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
       
        </Route>
        <Route>

          <Header
          />
        </Route>
        <Route path="/list">

          <MovieList />
        </Route>

        <Route path='/detail'>
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
