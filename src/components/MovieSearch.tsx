import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = '6a9097c1';

  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${currentPage}`)
      const searchResults = response.data.Search || [];
      const filteredResults = searchResults.filter((movie: any) => {
        const movieTitle = movie.Title.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return movieTitle === searchTermLower || movieTitle.includes(searchTermLower);
      });
      setMovies(filteredResults);
      setTotalPages(Math.ceil(parseInt(response.data.totalResults) / 10))
    } catch (error) {
      console.error(error)
    }
  }  

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCurrentPage(1)
    searchMovies()
  }

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1)
    searchMovies()
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
    searchMovies()
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleSearchSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      {movies && movies.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
          {movies.map((movie: any) => (
            <div key={movie.imdbID} className="col">
              <Link to={`/movies/${movie.imdbID}`}>
                <div className="card h-100">
                  <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Year}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found</p>
      )}

      {movies.length > 0 && (
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center mt-4">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              if (
                page === currentPage ||
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 2 && page <= currentPage + 2)
              ) {
                return (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                );
              } else if (page === currentPage - 3 || page === currentPage + 3) {
                return (
                  <li key={index} className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                );
              } else {
                return null;
              }
            })}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
  </div>
  )
}

export default MovieSearch