import React from 'react';
import './SearchForm.css';
import {useFormWithValidation} from "../../utils/ReactValidation";

export default function SearchForm({ isLoading, setSearchInput, setCheckboxActivated }) {
  const formWithValidation = useFormWithValidation();
  const { search } = formWithValidation.values;
  const { values, handleChange, errors, isValid } = formWithValidation;

  function handleSearchClick(evt) {
    evt.preventDefault();
    setSearchInput(search);
  }

  function handleCheckboxClick(value) {
    setCheckboxActivated(value);
  }

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        onSubmit={handleSearchClick}
        noValidate
      >
        <label className="search-form__input-container">
          <input
            className={`search-form__input ${errors.search && 'search-form__input-container_type_error'}`}
            type="text"
            name="search"
            value={values.search || ''}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Фильм"
            required/>
          <span className={`search__input-error ${errors.search && 'search__input-error_visible'}`}>{errors.search}</span>
          <button
            className={`search-form__button ${!isValid && 'search-form__button_disabled'}`}
            type="submit"
            disabled={!isValid || isLoading}
          >Найти</button>
        </label>
      </form>
      <label className="search-form__checkbox-label">
          <div className="search-form__checkbox-container">
          <input
              className="search-form__checkbox"
              type="checkbox"
              onChange={(evt) => handleCheckboxClick(evt.target.checked)}
            />
            <span className="search-form__checkbox-slider" />
          </div>
          Короткометражки
        </label>
    </section>
  );
};