import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../Redux/actions";
import validate from "./validate";
import image from "../../ps4-control.webp";
import style from "../CreateGame/CreateGame.module.css";
import { Link } from "react-router-dom";

export const CreateGame = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const allPlatforms = useSelector((state) => state.allPlatforms);

  const [indication, setIndication] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: [],
    released: "",
    rating: 0,
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: [],
    released: "",
    rating: 0,
    genres: [],
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (indication.genres.includes(event.target.value)) {
      alert("Este genero ya existe");
    } else if (indication.platforms.includes(event.target.value)) {
      alert("Esta Plataforma ya existe");
    } else if (property === "genres") {
      setIndication({
        ...indication,
        genres: [...indication.genres, event?.target?.value],
      });
    } else if (property === "platforms") {
      setIndication({
        ...indication,
        platforms: [...indication.platforms, event?.target.value],
      });
    } else {
      setIndication({ ...indication, [property]: value });
    }

    setErrors(validate({ ...indication, [property]: value }, errors));
  };

  const deletePlatform = (ele) => {
    let deleted = indication.platforms.filter((plat) => plat !== ele);
    setIndication({
      ...indication,
      platforms: deleted,
    });
  };

  const deleteGenres = (ele) => {
    let eliminar = indication.genres.filter((gen) => gen !== ele);
    setIndication({
      ...indication,
      genres: eliminar,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !errors?.name &&
      !errors?.rating &&
      !errors.description &&
      !errors.background_image &&
      !errors.released
    ) {
      dispatch(createGame(indication));
      alert("Game Created Successfully");
    } else {
      alert("Enter the fields correctly");
    }
  };
  console.log(indication);

  return (
    <div style={{ backgroundImage: `url(${image})` }} className={style.div1}>
      <Link to="/Home">
        <button>Back</button>
      </Link>
      <hr />
      <form action="" onSubmit={handleSubmit} className={style.containt}>
        <h1>FORMULARIO</h1>
        <div>
          <label htmlFor="">Nombre:</label>
          <input
            type="text"
            name="name"
            value={indication.name}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
          <p>{errors?.name}</p>
        </div>
        <div>
          <label htmlFor="">Image:</label>
          <input
            type="text"
            name="background_image"
            value={indication.background_image}
            onChange={handleInputChange}
            placeholder="Image"
          />
          <p>{errors?.background_image}</p>
        </div>
        <div>
          <label htmlFor="">Description:</label>
          <textarea
            name="description"
            value={indication.description}
            onChange={handleInputChange}
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <p>{errors?.description}</p>
        </div>

        <div>
          <label htmlFor="">platforms:</label>
          <select
            name="platforms"
            value={indication.platforms}
            onChange={handleInputChange}
          >
            <option value="Select">Select</option>
            {allPlatforms.map((plat) => (
              <option key={plat.name} value={plat.name}>
                {plat.name}
              </option>
            ))}
          </select>
        </div>

        <div className={style.platf}>
          {indication.platforms.map((ele) => (
            <p onClick={() => deletePlatform(ele)}>{ele}</p>
          ))}
        </div>

        <div>
          <label htmlFor="">Released:</label>
          <input
            type="date"
            name="released"
            value={indication.released}
            onChange={handleInputChange}
          />
          <p>{errors.released}</p>
        </div>
        <div>
          <label htmlFor="">Rating:</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            autoComplete="off"
            value={indication.rating}
            onChange={handleInputChange}
          />
          <p>{errors?.rating}</p>
        </div>

        <div>
          <label htmlFor="">Genres:</label>

          <select
            name="genres"
            value={indication.genres}
            onChange={handleInputChange}
          >
            <option value="select">Select</option>
            {allGenres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style.platf}>
          {indication.genres.map((ele) => (
            <p onClick={() => deleteGenres(ele)}>{ele}</p>
          ))}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
