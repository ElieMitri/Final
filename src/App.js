import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie" element={<MoviesInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
