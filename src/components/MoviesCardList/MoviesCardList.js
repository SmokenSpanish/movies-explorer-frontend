import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
  return (
    <section className="cards">
      <ul className="cards__list">
      <MoviesCard isSaved={false} isSavedMoviesList={props.isSavedMoviesList}/>
      </ul>
    </section>
  )
} 