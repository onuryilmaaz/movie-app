import { useEffect, useState } from "react";

const api_key = "0d01f8e1e9324f8866f06cff2f181401";

export default function useMovieDetails(id) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      async function getMovieDetails() {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      }

      getMovieDetails();
    },
    [id]
  );
  return { movie, loading };
}
