import styles from "../Home/Paginado.module.css";

const Paginado = ({ allGames, paginado, videoJuegosPorPagina }) => {
  const numPage = [];
  for (let i = 0; i < Math.ceil(allGames / videoJuegosPorPagina); i++) {
    numPage.push(i + 1);
  }

  return (
    <nav>
      <div className={styles.pagination}>
        {numPage?.map((num) => (
          <button key={num} onClick={() => paginado(num)}>
            {num}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Paginado;
