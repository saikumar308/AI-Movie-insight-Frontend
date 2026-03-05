/*
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query = "") => {
    try {
      const res = await fetch("http://localhost:5000/api/movies");
      const text = await res.text();
      console.log("Raw response text:", text); // Log raw response
      const data = JSON.parse(text);
      console.log("Parsed data:", data);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  const fettchMovieById = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/${id}`);
      if (!res.ok) {
        setSelectedMovie(null);
        return;
      }
      const data = await res.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie by ID:", error);
    }
  };
 
  useEffect(() => {
    fetchMovies(); // Load all movies initially
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(search);
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>

      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {movies.length === 0 ? (
            <p>No movies found</p>
          ) : (
            movies.map((movie) => (
              <div className="card" key={movie.id}>
                <img src={movie.poster} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>Year: {movie.releaseYear}</p>
                <p>Rating: ⭐ {movie.rating}</p>
                <p>{movie.cast}</p>
                <p>
                  Sentiment: <strong>{movie.sentiment}</strong>
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;*/

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5000/api/movies";

  //  Fetch All Movies
  const fetchAllMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  // Fetch Movie By ID
  const fetchMovieById = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${id}`);

      if (!res.ok) {
        setMovies([]);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setMovies([data]); // wrap single object into array
    } catch (error) {
      console.error("Error fetching movie by ID:", error);
    }
    setLoading(false);
  };

  // Search Handler
  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      fetchAllMovies();
      return;
    }

    // If input is number → call GET BY ID
    if (!isNaN(search)) {
      fetchMovieById(search);
    } 
    // If input is text → call search API
    else {
      fetchSearchMovies(search);
    }
  };

  // Fetch Movies By Title
  const fetchSearchMovies = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}?search=${query}`);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
    setLoading(false);
  };

  // Load all movies on page load
  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>

      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Enter ID or Movie Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {movies.length === 0 ? (
            <p>No movies found</p>
          ) : (
            movies.map((movie) => (
              <div className="card" key={movie.id}>
                <img src={movie.poster} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>Year: {movie.releaseYear}</p>
                <p>Rating: ⭐ {movie.rating}</p>
                <p>Cast: <ul>{movie.cast.map((actor, index) => <li key={index}>{actor}</li>)}</ul></p>
                <p>
           <strong>Overview</strong>: {movie.shortPlot}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;