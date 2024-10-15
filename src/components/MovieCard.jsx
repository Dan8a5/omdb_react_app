// components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.Poster && movie.Poster !== "N/A" 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450.png?text=No+Poster+Available';

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '450px',
    objectFit: 'cover',
  };

  const infoStyle = {
    padding: '15px',
  };

  const titleStyle = {
    marginTop: '0',
    color: '#333',
  };

  const yearStyle = {
    color: '#666',
  };

  const plotStyle = {
    marginBottom: '15px',
  };

  const ratingsHeaderStyle = {
    marginBottom: '5px',
    color: '#333',
  };

  return (
    <div style={cardStyle}>
      <img 
        src={posterUrl} 
        alt={`${movie.Title} poster`} 
        style={imageStyle}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://via.placeholder.com/300x450.png?text=Image+Not+Found'
        }} 
      />
      <div style={infoStyle}>
        <h2 style={titleStyle}>{movie.Title}</h2>
        <p style={yearStyle}>Release Year: {movie.Year}</p>
        <p style={plotStyle}>{movie.Plot}</p>
        <div>
          <h3 style={ratingsHeaderStyle}>Ratings:</h3>
          {movie.Ratings && movie.Ratings.length > 0 ? (
            movie.Ratings.map((rating, index) => (
              <p key={index}>{rating.Source}: {rating.Value}</p>
            ))
          ) : (
            <p>No ratings available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;