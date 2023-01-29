import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
