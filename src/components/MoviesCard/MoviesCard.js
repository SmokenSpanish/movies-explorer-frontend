import React from 'react';
import { useState } from 'react';
import './MoviesCard.css';
import image from '../../images/pic__COLOR_pic.jpg'

export default function MoviesCard(props) {
  const { isSaved } = props;
  const [filmLikeStatus, setFilmLikeStatus] = useState(isSaved);
  const filmLikeButtonClickHandler = () => {
    setFilmLikeStatus(!filmLikeStatus);
  }
  const cardButtonClassName = (`card__button ${filmLikeStatus ? 'card__button_type_active' : 'card__button_type_disable' }`);

  return (
    <li className="card">
      <figure className="card__container">
        <a className="card__link"
           href="https://www.youtube.com/watch?v=dFUdkLpytc0"
           rel="noreferrer"
           target="_blank">
          <img className="card__image" src={image} alt="О погоне за бенкси"/>
        </a>
        <figcaption className="card__caption">
          <p className="card__name">О погоне за бенкси</p>
          <p className="card__duration">1ч 17м</p>
          <button className={cardButtonClassName} 
          onClick={filmLikeButtonClickHandler}/>
        </figcaption>
      </figure>
    </li>
  )
} 