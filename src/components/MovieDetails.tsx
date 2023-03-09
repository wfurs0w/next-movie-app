import axios from "axios";
import { useEffect, useState } from "react";

export const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${match.params.id}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [match.params.id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={movie.Poster} className="img-fluid" alt={movie.Title} />
        </div>
        <div className="col-md-8">
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <p>Rated: {movie.Rated}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Director: {movie.Director}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Plot: {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};
