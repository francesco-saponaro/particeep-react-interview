import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Card.scss";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

// Actions imports
import {
  deleteMovieAction,
  updateLikeMovieAction,
} from "../../redux/actions/moviesActions";

// Cards element
const Card = ({ movies, currentMovies, setCategory, setCurrentPage }) => {
  const dispatch = useDispatch();

  // Create an array from set of categories array to get unique values
  // Needed for select element categories options
  const movieCategories = movies.map((movie) => movie.category);
  const uniqueCategories = [...new Set(movieCategories)];

  return (
    // Cards container
    <div className="cards-container">
      {/* Categories Select element */}
      <div className="categories-select">
        <label htmlFor="categories">Filter by category:</label>
        <select
          name="category"
          id="categories"
          defaultValue="default"
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option disabled value="default">
            --Choose category--
          </option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Movie cards */}
      <div className="cards">
        {currentMovies.map((movie, index) => (
          <div key={index} className="card">
            {/* Title */}
            <p className="card__title">{movie.title}</p>
            {/* Category */}
            <p className="card__category">{movie.category}</p>
            {/* Like/dislike switch */}
            <label className="card__switch">
              <input
                onClick={(e) =>
                  dispatch(updateLikeMovieAction(movies, e, movie.id))
                }
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>
            {/* Like and dislike stats */}
            <ul className="card__like-dislike-stats">
              <li>
                <AiOutlineLike /> {movie.likes}
              </li>
              <span>|</span>
              <li>
                <AiOutlineDislike /> {movie.dislikes}
              </li>
            </ul>
            {/* Delete button */}
            <button
              onClick={() => dispatch(deleteMovieAction(movie.id))}
              className="btn card__delete-btn"
              role="button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
