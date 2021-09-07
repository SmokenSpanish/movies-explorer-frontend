import React from 'react';
import './Promo.css'
// import illustration from "../../images/landing-logo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__text-container">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        </div>
      </div>
      <div className="promo__navigation">
          <a className="promo__navigation-link" href='#about-project'>О проекте</a>
          <a className="promo__navigation-link" href='#techs'>Технологии</a>
          <a className="promo__navigation-link" href='#profile'>Студент</a>
        </div>
    </section>
  )
}