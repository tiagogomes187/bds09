import { ReactComponent as StarImage } from 'assets/images/star.svg';
import axios from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { User } from 'types/user';
import { BASE_URL } from 'util/requests';
import './styles.css';

type FormData = {
  avalia: string;
};

type UrlParams = {
  reviewId: string;
};


const MovieDetails = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  const { reviewId } = useParams<UrlParams>();
  const [user, setUser] = useState<User>();
  const [review, setReview] = useState<Review>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies/${reviewId}`)
      .then((response) => {
        setReview(response.data);
        setUser(response.data);
      });
      
  }, [reviewId]);

  return (
    <div className="movie-details-container">
      <div>
        <h1>Tela detalhes do filme id: 1 </h1>
      </div>
      <div className="base-card movie-details-card">
        <div className="movie-details-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                {...register('avalia')}
                type="text"
                className="form-control base-input"
                placeholder="Deixe sua avaliação aqui"
                name="avalia"
              />
            </div>

            <div className="login-submit">
              <ButtonIcon text="SALVAR AVALIAÇÃO" />
            </div>
          </form>
        </div>
      </div>

      <div className="base-card movie-details-content">
        <div className="movie-details-description">
          <div className="movie-details-evaluator-name">
            <StarImage />
            <h6>{user?.name}</h6>
          </div>
          <p>
            {review?.text}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default MovieDetails;
