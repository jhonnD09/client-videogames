import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./FilterOrder.module.css";
import {
  filterGenres,
  orderAlphabetic,
  orderRating,
  getGenres,
  filterCreate,
} from "../../Redux/actions";

const FilterOrder = () => {
  const allGenres = useSelector((state) => state.allGenres);

  const dispatch = useDispatch();

  const handleChangeGenre1 = (event) => {
    dispatch(orderAlphabetic(event.target.value));
  };

  const handleChangeGenre2 = (event) => {
    dispatch(orderRating(event.target.value));
  };

  const handleChangeGenre3 = (event) => {
    dispatch(filterGenres(event.target.value));
  };

  const handleChangeGenre4 = (event) => {
    dispatch(filterCreate(event.target.value));
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.AllFilter}>
        <label htmlFor="">Order Alphabetic: </label>
        <select onChange={handleChangeGenre1}>
          <option value="All">All</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <label>Order rating: </label>
        <select onChange={handleChangeGenre2}>
          <option value="none">none</option>
          <option value="0-5">0-5</option>
          <option value="5-0">5-0</option>
        </select>

        <label htmlFor="">Filter by Genres: </label>
        <select name="filtro" id="" onChange={handleChangeGenre3}>
          <option value="All">All</option>
          {allGenres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>

        <label htmlFor="">Filter by created: </label>
        <select onChange={handleChangeGenre4}>
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Not Created">Not created</option>
        </select>
        <Link to="/">
          <button className={style.botones}>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default FilterOrder;
