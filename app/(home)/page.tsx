"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setisLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setisLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {isLoading ? "Loading..." : JSON.stringify(movies)}
      <h1> home</h1>
    </div>
  );
}
