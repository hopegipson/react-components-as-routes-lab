import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
              <div>
                <h2>{actor.name}</h2>
              <ul>
              {actor.movies.map(movie => (

             <li className="list-group-item list-group-item-primary">
                {movie}
           </li>
              ))}
           </ul>
           </div>
            ))}
          </div>
  );
};

export default Actors;
