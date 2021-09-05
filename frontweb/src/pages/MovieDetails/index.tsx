import { ReactComponent as StarImage } from 'assets/images/star.svg';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import './styles.css';

type FormData = {
  avalia: string;
};

const MovieDetails = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

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
            <h6>Maria Silva</h6>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-details-description">
          <div className="movie-details-evaluator-name">
            <StarImage />
            <h6>Maria Silva</h6>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-details-description">
          <div className="movie-details-evaluator-name">
            <StarImage />
            <h6>Maria Silva</h6>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-details-description">
          <div className="movie-details-evaluator-name">
            <StarImage />
            <h6>Maria Silva</h6>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
