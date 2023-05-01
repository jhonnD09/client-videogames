import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import image from "../../landing.png";
import imagen from "../../Samurai.jpg";

export const Landing = () => {
  return (
    <div
      className={style.contenedor}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>GAMES PAGE</h1>
      <p>
        Welcome to my games page, where you can get information about the
        multitudes of games used on different platforms.
      </p>
      <Link to="Home">
        <button>PRESS START</button>
      </Link>
    </div>
  );
};
