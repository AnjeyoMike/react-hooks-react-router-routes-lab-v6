/*import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */ /*}
    </article>
  );
};

export default MovieCard;*/
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
