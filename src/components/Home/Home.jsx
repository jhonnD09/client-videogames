import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import style from "../Home/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getPlatforms } from "../../Redux/actions";
import Paginado from "./Paginado";
import { Nav } from "../Nav/Nav";
import FilterOrder from "../FilterOrder/FilterOrder";
import Footer from "../Footer/Footer";

export const Home = () => {
  const allgames = useSelector((state) => state.allGames);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [videoJuegosPorPagina] = useState(15);

  const indexOfLastGames = currentPage * videoJuegosPorPagina;

  const indexOfFirstGames = indexOfLastGames - videoJuegosPorPagina;

  const currentVideogames = allgames.slice(indexOfFirstGames, indexOfLastGames);

  const paginado = (numPage) => {
    setCurrentPage(numPage);
  };

  useEffect(() => {
    if (allgames.length < 1) {
      dispatch(getGames());
    }
    dispatch(getPlatforms());
  }, [dispatch, allgames]);

  return (
    <div>
      <div className={style.allNav}>
        <Nav />
        <FilterOrder />
      </div>
      {/* <div className={style.carousel}></div> */}
      <div className={style.containt}>
        <div className={style.pagina}>
          <Paginado
            allGames={allgames.length}
            videoJuegosPorPagina={videoJuegosPorPagina}
            paginado={paginado}
          />
        </div>
        {currentVideogames?.map((elem) => {
          return (
            <Card
              key={elem.id}
              id={elem.id}
              name={elem.name}
              background_image={elem.background_image}
              genres={
                !elem.createdInDb
                  ? elem.genres
                  : elem.Genres.map((elem) => elem.name).join(", ")
              }
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
