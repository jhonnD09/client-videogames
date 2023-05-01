import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const GET_GENRES = "GET_GENRES";
export const GAME_DETAIL = "GAME_DETAIL";
export const CREATE_GAME = "CREATE_GAME";
export const ORDER_RATING = "ORDER_RATING";
export const ORDER_ALPHABETIC = "ORDER_ALPHABETIC";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_CREATE = "FILTER_CREATE";
export const GET_GAMES_NAME = "GET_GAMES_NAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getGames = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/videogames").then((response) => {
      return dispatch({ type: GET_GAMES, payload: response.data });
    });
  };
};

export const createGame = (indication) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/videogames", indication)
      .then((response) => {
        return dispatch({ type: CREATE_GAME, payload: response.data });
      });
  };
};

export const gameDetails = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/videogames/${id}`).then((response) => {
      return dispatch({ type: GAME_DETAIL, payload: response.data });
    });
  };
};

export const getGenres = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/genres").then((response) => {
      return dispatch({ type: GET_GENRES, payload: response.data });
    });
  };
};

export const getPlatforms = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/platforms").then((response) => {
      return dispatch({ type: GET_PLATFORMS, payload: response.data });
    });
  };
};

export const getGameByName = (name) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/videogames?name=${name}`)
      .then((response) => {
        return dispatch({ type: GET_GAMES_NAME, payload: response.data });
      });
  };
};

export const filterGenres = (genre) => {
  return { type: FILTER_GENRES, payload: genre };
};

export const filterCreate = (payload) => {
  return { type: FILTER_CREATE, payload: payload };
};

export const orderAlphabetic = (name) => {
  return { type: ORDER_ALPHABETIC, payload: name };
};

export const orderRating = (name) => {
  return { type: ORDER_RATING, payload: name };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
