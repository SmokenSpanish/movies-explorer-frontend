import React from 'react';
import './MoviesCard.css';
import { durationConverter } from '../../utils/durationConverter';

export default function MoviesCard({
  isSavedMoviesList,
  savedMovies, movie,
  handleSaveMovie ,
  handleRemoveMovie,
}) {
  const { image, nameRU, duration, trailer } = movie;

  let isSaved = false;
  let savedId;
  isSaved = savedMovies.some((item) => {
    if (item.movieId === movie.movieId) {
      savedId = item._id;
      return true;
    }
    return false;
  });

  // const [filmLikeStatus, setFilmLikeStatus] = useState(isSaved);
  // const filmLikeButtonClickHandler = () => {
  //   setFilmLikeStatus(!filmLikeStatus);
  // }
  const cardButtonClassName = (`card__button ${isSavedMoviesList  ? 'card__button_type_active' : isSaved ? 'card__button_type_active' : 'card__button_type_disable' }`);

  return (
    <li className="card">
      <figure className="card__container">
        <a className="card__link"
           href={trailer}
           rel="noreferrer"
           target="_blank">
          <img className="card__image" src={image} alt={nameRU}/>
        </a>
        <figcaption className="card__caption">
          <p className="card__name">{nameRU}</p>
          <p className="card__duration">{durationConverter(duration)}</p>
          <button className={cardButtonClassName} 
          onClick={() => {
            isSaved ? handleRemoveMovie(movie._id ? movie._id  : savedId) : handleSaveMovie(movie)
        }}/>
        </figcaption>
      </figure>
    </li>
  )
} 