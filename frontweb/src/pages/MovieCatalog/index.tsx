import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import CardLoader from 'pages/CardLoader';

import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      baseURL: BASE_URL,
      params: {
        page: pageNumber,
        size: 12
      },
    };
    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getMovies(0);
  }, []);


  return (
    <>
      <div className="movie-catalog-container">
        <div className="movie-catalog-content">
          <h1>Tela listagem de filmes</h1>
        </div>
       
        <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((movie) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
              <Link to="/movies/1">
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))
        )}
      </div>
      </div>
    </>
  );
};

export default MovieCatalog;
