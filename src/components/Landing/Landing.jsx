import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import image from "../../landing.png";

export const Landing = () => {
  return (
    <div
      className={style.contenedor}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>Games Page</h1>
      <p>
        Welcome to my games page, where you can get information about the
        multitudes of games used on different platforms.
      </p>
      <Link to="Home">
        <button>Start</button>
      </Link>
    </div>
  );
};
