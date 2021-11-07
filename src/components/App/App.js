import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm'
import Detail from '../Detail/Detail'

function App() {

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>
        <Route path="/" exact>

          <nav>

            <Link Link to="/form">Form</Link>

          </nav>
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
