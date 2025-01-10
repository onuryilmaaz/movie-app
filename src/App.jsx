/* eslint-disable react/no-unknown-property */
import { useState } from "react";

/* eslint-disable no-unused-vars */
const movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
];

const selected_movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    duration: 120,
    rating: 8.4,
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    duration: 125,
    rating: 8.8,
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    duration: 125,
    rating: 8.8,
  },
];

const getAvarage = (array) =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovie, setSelectedMovie] = useState(selected_movie_list);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgRating = getAvarage(selectedMovie.map((movie) => movie.rating));
  const avgDuration = getAvarage(selectedMovie.map((movie) => movie.duration));
  return (
    <>
      <nav className="bg-primary text-white p-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">Movie App</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Film arayınız..."
              />
            </div>
            <div className="col-4 text-end">
              <strong>5</strong> kayıt bulundu.
            </div>
          </div>
        </div>
      </nav>

      <main className="container">
        <div className="row mt-2">
          <div className="col-md-9">
            <div className="movie-list">
              <button
                className="btn btn-sm btn-outline-primary mb-2"
                onClick={() => setIsOpen1(!isOpen1)}
              >
                {isOpen1 ? (
                  <i className="bi bi-chevron-up"></i>
                ) : (
                  <i className="bi bi-chevron-down"></i>
                )}
              </button>
              {isOpen1 && (
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
                  {movies.map((movie) => (
                    <div className="col mb-2" key={movie.Id}>
                      <div className="card">
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h6 className="card-title">{movie.Title}</h6>
                          <div>
                            <i class="bi bi-calendar2-date me-1"></i>
                            <span>{movie.Year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3">
            <div className="movie_list">
              <button
                className="btn btn-sm btn-outline-primary mb-2"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                {isOpen2 ? (
                  <i className="bi bi-chevron-up"></i>
                ) : (
                  <i className="bi bi-chevron-down"></i>
                )}
              </button>
              {isOpen2 && (
                <>
                  <div className="card mb-2">
                    <div className="card-body">
                      <h5>Listeye [{selectedMovie.length}] film ekledi.</h5>
                      <div className="d-flex justify-content-between">
                        <p>
                          <i className="bi bi-star-fill text-warning me-1"></i>
                          <span>{avgRating.toFixed(2)}</span>
                        </p>
                        <p>
                          <i className="bi bi-hourglass-split text-info me-1"></i>
                          <span>{avgDuration.toFixed(2)} dk</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {selectedMovie.map((movie) => (
                    <div className="card mb-2" key={movie.Id}>
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="img-fluid rounded-start"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <h6 className="card-title">{movie.Title}</h6>
                            <div className="d-flex justify-content-between">
                              <p>
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                <span>{movie.rating}</span>
                              </p>
                              <p>
                                <i className="bi bi-hourglass text-info me-1"></i>
                                <span>{movie.duration} dk</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
