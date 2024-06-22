/*import { useEffect, useState } from "react";

function Actors() {
  return (
    <>
      <header>
        {/* What component should go here? */ /*}
      </header>
      <main>
        {/* Actor info here! */ /*}
      </main>
    </>
  );
};

export default Actors;*/
import React, { useState, useEffect } from "react";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("/actors")
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;
