import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Detail from '../Detail/Detail'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
          
        </Route>
        
        <Route>
        <Detail path = '/detail'/>  
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
