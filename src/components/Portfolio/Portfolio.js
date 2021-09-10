import React from 'react';
import './Portfolio.css';
import avatar from '../../images/avatar.jpg'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Студент</h2>
        <article className="about">
          <div>
            <h3 className="about__name">Максим</h3>
            <p className="about__profession">Фронтенд-разработчик, 29 лет</p>
            <p className="about__bio">
              Родился и живу в Москве, закончил РГУТиС на факультете туризма. Всегда увлекался IT технологиями
              и в 2019 году решил сменить сферу деятельности. После событий с пандемией, окончательно понял что
              настало время действовать и ушел в веб разработку, начал курсы в Я.Практикум.
            </p>
            <ul className="about__links-list">
              <li className="about__links-element">
                <a className="about__link"
                   href="https://t.me/SmokenSpanish"
                   rel="noreferrer"
                   target="_blank">Telegram</a>
              </li>
              <li className="about__links-element">
                <a className="about__link"
                   href="https://github.com/SmokenSpanish"
                   rel="noreferrer"
                   target="_blank">Github
                </a>
              </li>
            </ul>
          </div>
          <img className="about__photo" src={avatar} alt="фото"/>
        </article>
        <h3 className="portfolio__subtitle">Портфолио</h3>
        <ul className="portfolio__links-list">
          <li className="portfolio__links-element">
            <a
              className="portfolio__link"
              href="https://SmokenSpanish.github.io/how-to-learn"
              rel="noreferrer"
              target="_blank">Статичный сайт
              <div className="portfolio__arrow">↗</div>
            </a>
          </li>
          <li className="portfolio__links-element">
            <a
              className="portfolio__link"
              href="https://SmokenSpanish.github.io/russian-travel/index.html"
              rel="noreferrer"
              target="_blank">Адаптивный сайт
              <div className="portfolio__arrow">↗</div>
            </a>
          </li>
          <li className="portfolio__links-element">
            <a
              className="portfolio__link"
              href="https://SmokenSpanish.github.io/mesto-react/index.html"
              rel="noreferrer"
              target="_blank">Одностраничное приложение
              <div className="portfolio__arrow">↗</div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}