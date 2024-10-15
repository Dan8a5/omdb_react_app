// App.jsx
// Import necessary dependencies from React
import React, { useState, useEffect } from 'react';
// Import the MovieList component from the components folder
import MovieList from './components/MovieList';

// API key for accessing the OMDB API
const API_KEY = 'd60ef498';
// Array of IMDb IDs for the movies we want to display
const MOVIE_IDS = ['tt0137523', 'tt0144084', 'tt0133093']; // Fight Club, American Psycho, The Matrix

// Define the main App component
const App = () => {
  // State to store the fetched movie data
  const [movies, setMovies] = useState([]);

  // useEffect hook to fetch movie data when the component mounts
  useEffect(() => {
    // Async function to fetch movie data
    const fetchMovies = async () => {
      // Create an array of promises, each fetching data for one movie
      const moviePromises = MOVIE_IDS.map(id =>
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`).then(res => res.json())
      );
      // Wait for all promises to resolve and get the movie data
      const movieData = await Promise.all(moviePromises);
      // Update the state with the fetched movie data
      setMovies(movieData);
    };
    // Call the fetchMovies function
    fetchMovies();
  }, []); // Empty dependency array means this effect runs once on mount

  // Styles object
  const styles = {
    html: {
      margin: 0,
      padding: 0,
      height: '100%',
    },
    body: {
      margin: 0,
      padding: 0,
      height: '100%',
      backgroundColor: '#2e7d32', // Dark green background
    },
    app: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      minHeight: '100vh',
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: 'transparent', // Make app background transparent
    },
    title: {
      textAlign: 'center',
      color: 'white', // Change title color to white for better contrast
    }
  };

  // Apply styles to html and body
  useEffect(() => {
    Object.assign(document.documentElement.style, styles.html);
    Object.assign(document.body.style, styles.body);
    
    // Cleanup function
    return () => {
      document.documentElement.style = '';
      document.body.style = '';
    };
  }, []);

  // Render the component
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>OMDB Movie Review App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

// Export the App component as the default export
export default App;