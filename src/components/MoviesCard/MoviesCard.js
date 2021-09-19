import React from 'react';
import { useState } from 'react';
import './MoviesCard.css';
import { durationConverter } from '../../utils/durationConverter';

export default function MoviesCard({ isSavedMoviesList, isSaved, movie }) {
  const { image, nameRU, duration, trailer } = movie;


  const [filmLikeStatus, setFilmLikeStatus] = useState(isSaved);
  const filmLikeButtonClickHandler = () => {
    setFilmLikeStatus(!filmLikeStatus);
  }
  const cardButtonClassName = (`card__button ${filmLikeStatus ? 'card__button_type_active' : 'card__button_type_disable' }`);

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
          onClick={filmLikeButtonClickHandler}/>
        </figcaption>
      </figure>
    </li>
  )
} 