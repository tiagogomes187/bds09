import { ReactComponent as StarImage } from 'assets/images/star.svg';
import axios from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import MovieCard from 'components/MovieCard';
import Reviews from 'pages/Reviews';
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

type Props = {
  review: Review;
}

const MovieDetails = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  const { reviewId } = useParams<UrlParams>();
  const [user, setUser] = useState<User>();
 // const [review, setReview] = useState<Review>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies/1`)
      .then((response) => {
        //setReview(response.data);
        setUser(response.data);
        
      });
      
  }, [reviewId]);

  const movie : Movie = {
    id: 1,
    title: "Bob Esponja",
    subTitle: "O Incrível Resgate",
    year: 2020,
    imgUrl: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    synopsis: "Onde está Gary? Segundo Bob Esponja, Gary foi \caracolstrado\ pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras.",
    "genre": {
      "id": 1,
      "name": "Comédia"
  }
}

  return (
    <div className="movie-details-container">
      <div>
        <h1>Tela detalhes do filme id: 1 </h1>
      </div>
      
      <div>
        <Reviews />
      </div>
        
      </div>
    
  );
};

export default MovieDetails;
