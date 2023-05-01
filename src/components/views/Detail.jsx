import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { gameDetails, cleanDetail } from "../../Redux/actions";
import style from "../views/Detail.module.css";
import Loading from "../Loading/Loading";

export const Detail = () => {
  const { id } = useParams();
  const gameDetail = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanDetail());
    dispatch(gameDetails(id));
  }, [dispatch]);

  return (
    <div className={style.containt}>
      {gameDetail.name ? (
        <div className={style.detalles}>
          <div className={style.description}>
            <h2>
              <p>Description:</p>
              {gameDetail.description.replace(/<[^>]*>?/g, "")}
            </h2>
          </div>
          <div className={style.all}>
            <h2>
              <p>Name:</p> {gameDetail.name}
            </h2>
            <h2>
              <p>Id:</p> {gameDetail.id}
            </h2>
            <h2>
              <p>Platforms:</p>{" "}
              {!gameDetail.createdInDb
                ? gameDetail.platforms
                : gameDetail.platforms.join(", ")}
            </h2>
            <h2>
              <p>Released:</p> {gameDetail.released}
            </h2>
            <h2>
              <p>Rating:</p> {gameDetail.rating}
            </h2>
            <h2>
              <p> Genres:</p>
              {!gameDetail.createdInDb
                ? gameDetail.genres
                : gameDetail.Genres.map((elem) => elem.name).join(", ")}
            </h2>
          </div>
          <img
            src={gameDetail.background_image}
            className={style.imagen}
            alt=""
          />
          <Link to="/Home">
            <button>Home</button>
          </Link>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
