import { ReactComponent as StarImage } from 'assets/images/star.svg';
import axios from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { BASE_URL } from 'util/requests';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

import './styles.css';

type UrlParams = {
  movieId: string;
}

type FormData = {
  avalia: string;
};


const Reviews = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  const { movieId } = useParams<UrlParams>();

  const [review, setReview] = useState<Review>();

 

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/movies/${movieId}/reviews`,
    };

    requestBackend(params)
      .then((response) => {
        setReview(response.data);
        console.log(response.data);
      });
  }, [movieId]);

  return (
    <div className="review-details-container">
      <div className="base-card review-details-card">
        <div className="review-details-form">
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

            <div className="review-login-submit">
              <ButtonIcon text="SALVAR AVALIAÇÃO" />
            </div>
          </form>
        </div>
      </div>

      <div className="base-card review-details-content">
        <div className="review-details-description">
          <div className="review-details-evaluator-name">
            <StarImage />
            <h6>{review?.user}</h6>
          </div>
          <p>{review?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
