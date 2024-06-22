/*import { useEffect, useState } from "react";

function Movie() {
  return (
    <>
      <header>
        {/* What component should go here? */ /*}
      </header>
      <main>
        {/* Movie info here! */ /*}
      </main>
    </>
  );
};

export default Movie;*/
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
