import style from "../Card/Card.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Card = ({ id, name, background_image, genres }) => {
  const navigate = useNavigate();

  const handleCardOnClick = () => {
    navigate(`/Detail/${id}`);
  };

  return (
    <div
      key={id}
      className={style?.containt}
      style={{ backgroundImage: `url(${background_image})` }}
      onClick={handleCardOnClick}
    >
      <div className={style.cardDetail}>
        <h1>{name}</h1>
        <h2>{genres}</h2>
      </div>
    </div>
  );
};
