import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm'
import Detail from '../Detail/Detail'

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <nav>
            <button>
              <Link Link to="/form">Form</Link>
            </button>
          </nav>
          <h1>The Movies Saga!</h1>
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
