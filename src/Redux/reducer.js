import { FILTER_GENRES } from "./actions";
import { GET_GAMES } from "./actions";
import { CREATE_GAME } from "./actions";
import { GAME_DETAIL } from "./actions";
import { ORDER_RATING } from "./actions";
import { GET_GENRES } from "./actions";
import { ORDER_ALPHABETIC } from "./actions";
import { FILTER_CREATE } from "./actions";
import { GET_GAMES_NAME } from "./actions";
import { GET_PLATFORMS } from "./actions";
import { CLEAN_DETAIL } from "./actions";

const initialState = {
  allGames: [],
  gameDetail: {},
  allGenres: [],
  games: [],
  allPlatforms: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
        games: action.payload,
      };

    case GAME_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };

    case GET_PLATFORMS:
      return {
        ...state,
        allPlatforms: action.payload,
      };

    case GET_GAMES_NAME:
      return {
        ...state,
        allGames: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        gameDetail: {},
      };

    case FILTER_CREATE:
      const filterCreated =
        action.payload === "All"
          ? state.games
          : action.payload === "Created"
          ? state.games.filter((game) => game.createdInDb)
          : state.games.filter((elem) => !elem.createdInDb);

      return {
        ...state,
        allGames: filterCreated,
      };

    case FILTER_GENRES:
      const allVideoGamesG = state.games;

      const filteredGenre =
        action.payload === "All"
          ? state.games
          : allVideoGamesG.filter((game) => {
              return !game.createdInDb
                ? game.genres?.includes(action.payload)
                : game.Genres.map((elem) => elem.name)?.includes(
                    action.payload
                  );
            });

      return {
        ...state,
        allGames: filteredGenre,
      };

    case CREATE_GAME:
      return {
        ...state,
        allGames: [...state.allGames, action.payload],
      };

    case ORDER_ALPHABETIC:
      let sortedGames = [...state.games];

      sortedGames.sort((a, b) => {
        if (action.payload === "All") {
          return state.allGames;
        } else if (action.payload === "A-Z") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      return {
        ...state,
        allGames: sortedGames,
      };

    case ORDER_RATING:
      let orderRat = [...state.games];

      orderRat.sort((a, b) => {
        if (action.payload === "none") {
          return state.allGames;
        } else if (action.payload === "0-5") {
          return a.rating - b.rating;
        } else {
          return b.rating - a.rating;
        }
      });

      return {
        ...state,
        allGames: orderRat,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
