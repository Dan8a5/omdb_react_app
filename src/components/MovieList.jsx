import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  };

  return (
    <div style={listStyle}>
      {movies.map((movie) => (
        // Use imdbID as the unique key for each MovieCard
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
