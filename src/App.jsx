import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm'; // Ensure this exists in your components folder

// Your OMDB API key
const API_KEY = 'd60ef498';

const App = () => {
  // Initialize the movies state as an empty array
  const [movies, setMovies] = useState([]);

  // Function to handle movie search
  const handleMovieSearch = async (movieTitle) => {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`;
    
    // Log the URL being fetched
    console.log("Fetching movie from URL:", url);

    try {
      const response = await fetch(url);
      const movieData = await response.json();

      // Log the full API response for debugging
      console.log("Movie data received:", movieData);

      if (movieData && movieData.Response !== "False") {
        // Add the new movie to the movies array if found
        setMovies((prevMovies) => [...prevMovies, movieData]);
      } else {
        // Show an alert if the movie isn't found
        alert('Movie not found. Please try again.');
      }
    } catch (error) {
      // Log any errors that occur during the fetch
      console.error("Error fetching movie:", error);
      alert('Error fetching movie. Please try again.');
    }
  };

  // Styling for the app
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
      color: 'white', // White text for better contrast
    }
  };

  // Apply styles to html and body using useEffect
  React.useEffect(() => {
    Object.assign(document.documentElement.style, styles.html);
    Object.assign(document.body.style, styles.body);
    
    // Cleanup function to reset styles when the component is unmounted
    return () => {
      document.documentElement.style = '';
      document.body.style = '';
    };
  }, []);

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>OMDB Movie Review App</h1>
      
      {/* Render the MovieForm and pass the handleMovieSearch function */}
      <MovieForm onMovieSearch={handleMovieSearch} />

      {/* Conditional rendering: Show a message if no movies are found */}
      {movies.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>No movies found. Start by searching for one!</p>
      ) : (
        // Render the MovieList with the current movies
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
