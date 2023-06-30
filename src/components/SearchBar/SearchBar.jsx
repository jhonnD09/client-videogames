import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameByName, getGames } from "../../Redux/actions";
import styles from "../SearchBar/SearchBar.module.css";

export const SearchBar = () => {
  const [name, setName] = useState("");

  const games = useSelector((state) => state.games);
  const allGames = useSelector((state) => state.allGames);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getGameByName(name));
  };

  const handleClick = () => {
    dispatch(getGames());
    setName("");
  };

  // Si el array que esta mostrando es distinto al array que tiene todos los juegos
  return (
    <div className={styles.searchBar}>
      {allGames !== games ? (
        <button className={styles.botones} onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              fill: "rgba(0, 0, 0, 1)",
              transform: "rotate(90deg)",
            }}
          >
            <path
              d="M10 11H7.101l.001-.009a4.956 4.956 0 0 1
             .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 
             4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 
             7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 
             2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 
             4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 
             16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 
             6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"
            ></path>
          </svg>
        </button>
      ) : null}
      <input
        type="search"
        placeholder="Search By Name"
        onChange={(event) => {
          handleChange(event);
        }}
      />

      <button
        type="submit"
        onClick={(event) => {
          handleSubmit(event);
        }}
        className={styles.button}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ fill: "rgba(6, 6, 6, 1)" }}
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
        </svg>
      </button>
    </div>
  );
};
