import { SearchBar } from "../SearchBar/SearchBar";
import { useState } from "react";
import styles from "../Nav/Nav.module.css";
import { CreateGame } from "../CreateGame/CreateGame";

export const Nav = () => {
  let [filterOrder, setFilterOrder] = useState(false);
  let [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setFilterOrder(!filterOrder);
  };

  return (
    <div className={styles.nav}>
      <h1>Gaming Page</h1>
      <SearchBar />

      <button onClick={handleClick} className={styles.botones}>
        Create Game
      </button>
      {isActive ? (
        <button onClick={handleClick} className={styles.exit}>
          Close
        </button>
      ) : null}

      {isActive ? <CreateGame show={setIsActive} /> : null}
    </div>
  );
};
