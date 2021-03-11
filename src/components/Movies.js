import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
            {movies.map(movie => (
              <div>
                <h2>{movie.title}</h2>
                <h4>{movie.time} Run Time</h4>
              <ul>
              {movie.genres.map(genre => (

             <li className="list-group-item list-group-item-primary">
                {genre}
           </li>
              ))}
           </ul>
           </div>
            ))}
    </div>
  );
};

export default Movies;
