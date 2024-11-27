import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  // State to handle user reviews
  const [review, setReview] = useState('');
  const [submittedReview, setSubmittedReview] = useState(null);

  const posterUrl = movie.Poster && movie.Poster !== "N/A" 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450.png?text=No+Poster+Available';

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: '20px', // Add margin between cards
    
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

  // Function to handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setSubmittedReview(review);
    setReview(''); // Clear the text area after submission
  };

  return (
    <div style={cardStyle}>
      <img 
        src={posterUrl} 
        alt={`${movie.Title} poster`} 
        style={imageStyle}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://via.placeholder.com/300x450.png?text=Image+Not+Found';
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

        {/* Add review form */}
        <form onSubmit={handleReviewSubmit} style={{ marginTop: '15px' }}>
          <label htmlFor={`review-${movie.imdbID}`}><strong>Your Review:</strong></label>
          <textarea
            id={`review-${movie.imdbID}`}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="3"
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
            placeholder="Write your review here..."
          />
          <button type="submit" style={{ marginTop: '10px' }}>Submit Review</button>
        </form>

        {/* Display the submitted review, if any */}
        {submittedReview && (
          <div style={{ marginTop: '15px', color: '#333' }}>
            <h4>Submitted Review:</h4>
            <p>{submittedReview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
