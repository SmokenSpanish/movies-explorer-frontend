import React from 'react';
import './MoviesCard.css';
import image from '../../images/pic__COLOR_pic.jpg'

export default function MoviesCard(props) {
  const { isSavedMoviesList, isSaved } = props;
  const cardButtonClassName = (`card__button ${isSavedMoviesList ? 'card__button_type_remove' : isSaved ? 'card__button_saved' : 'card__button_type_save' }`);

  return (
    <li className="card">
      <figure className="card__container">
        <a className="card__link"
           href="https://www.youtube.com/watch?v=NxJfLA_O7P8"
           rel="noreferrer"
           target="_blank">
          <img className="card__image" src={image} alt="О погоне за бенкси"/>
        </a>
        <figcaption className="card__caption">
          <p className="card__name">О погоне за бенкси</p>
          <p className="card__duration">1ч 17м</p>
          <button className={cardButtonClassName}/>
        </figcaption>
      </figure>
    </li>
  )
} 