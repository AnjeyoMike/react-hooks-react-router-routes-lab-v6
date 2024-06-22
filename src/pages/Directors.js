/*import { useEffect, useState } from "react";

function Directors() {
  return (
    <>
      <header>
        {/* What component should go here? */ /*}
      </header>
      <main>
        {/* Director info here! */ /*}
      </main>
    </>
  );
};

export default Directors;*/

import React, { useState, useEffect } from "react";

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/directors")
      .then((response) => response.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;
