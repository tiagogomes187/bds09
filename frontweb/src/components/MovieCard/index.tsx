import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <div className="card-container">
        <div className="base-card">
          <h3>{movie.title}</h3>
          <h6>{movie.subTitle}</h6>
          <p>{movie.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
