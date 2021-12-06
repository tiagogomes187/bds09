import { ReactComponent as StarImage } from 'assets/images/star.svg';
import ButtonIcon from 'components/ButtonIcon';

import { useForm } from 'react-hook-form';

//import { Review } from 'types/review';

import './styles.css';

type FormData = {
    avalia: string;
  };
  
  
  //type Props = {
    //review: Review;
  //}

  const Reviews = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (formData: FormData) => {
        console.log(formData);
      };

    //const { reviewId } = useParams<UrlParams>(); 

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
                <h6>Nome usuáriuo</h6>
              </div>
              <p>
                Ola gostei muito
              </p>
            </div>

            <div className="review-details-description">
              <div className="review-details-evaluator-name">
                <StarImage />
                <h6>Nome usuáriuo</h6>
              </div>
              <p>
                Ola gostei muito
              </p>
            </div>

            <div className="review-details-description">
              <div className="review-details-evaluator-name">
                <StarImage />
                <h6>Nome usuáriuo</h6>
              </div>
              <p>
                Ola gostei muito
              </p>
            </div>
            
          </div>
        </div>
      );
};

export default Reviews;