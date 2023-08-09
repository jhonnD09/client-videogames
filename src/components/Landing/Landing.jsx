import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import image from "../../landing.png";

export const Landing = () => {
  return (
    <div
      className={style.contenedor}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={style.inter}>
        <h1>GAMING</h1>
        <h2 className={style.subtitle}>PAGE</h2>
        <p>
          Welcome to my games page, where you can get information about the
          multitudes of games used on different platforms.
        </p>
        <Link to="Home">
          <button>PRESS START</button>
        </Link>
      </div>
    </div>
  );
};
