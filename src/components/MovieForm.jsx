import React, { useState } from 'react';

const MovieForm = ({ onMovieSearch }) => {
  // State to track the movie title input by the user
  const [movieTitle, setMovieTitle] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    if (movieTitle.trim() !== '') {
      // Call the parent function passed via props to search the movie
      onMovieSearch(movieTitle);
      
      // Clear the input field after submitting
      setMovieTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movieTitle">Search for a Movie:</label>
      <input
        type="text"
        id="movieTitle"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        placeholder="Enter movie title"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieForm;
