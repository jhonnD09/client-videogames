import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { gameDetails, cleanDetail } from "../../Redux/actions";
import style from "../views/Detail.module.css";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

export const Detail = () => {
  const { id } = useParams();
  const gameDetail = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanDetail());
    dispatch(gameDetails(id));
  }, [dispatch, id]);

  return (
    <div className={style.containt}>
      {gameDetail.name ? (
        <div className={style.detalles}>
          <div
            style={{ backgroundImage: `url(${gameDetail?.background_image})` }}
            className={style.imageTop}
          >
            <h1>{gameDetail.name}</h1>
          </div>
          <div
            style={{ backgroundImage: `url(${gameDetail?.background_image})` }}
            className={style.imageSm}
          />

          <div className={style.allDescription}>
            <div className={style.description}>
              <h2 className={style.titleDes}>Description:</h2>
              <p>{gameDetail.description.replace(/<[^>]*>?/g, "")}</p>
            </div>
          </div>
          <div className={style.all}>
            <div className={style.subDivs}>
              <h2>Id:</h2>
              <p>{gameDetail.id}</p>
            </div>

            <div className={style.subDivs}>
              <h2>Platforms:</h2>

              {!gameDetail.createdInDb
                ? gameDetail.platforms
                    .split(",")
                    .map((elem, index) => <p key={index}>{elem}</p>)
                : gameDetail.platforms.map((elem, index) => (
                    <p key={index}>{elem}</p>
                  ))}
            </div>

            <div className={style.subDivs}>
              <h2>Released:</h2>
              <p>{gameDetail.released}</p>
            </div>

            <div className={style.subDivs}>
              <h2>Rating:</h2>
              <p>{gameDetail.rating}</p>
            </div>

            <div className={style.subDivs}>
              <h2>Genres:</h2>
              {!gameDetail.createdInDb
                ? gameDetail.genres
                    .split(",")
                    .map((elem, index) => <p key={index}>{elem}</p>)
                : gameDetail.Genres.map((elem, index) => (
                    <p key={index}>{elem.name}</p>
                  ))}
            </div>
          </div>
          <Link to="/Home">
            <button> Return</button>
          </Link>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
