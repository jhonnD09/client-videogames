import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../Redux/actions";
import validate from "./validate";
import style from "../CreateGame/CreateGame.module.css";

export const CreateGame = (show) => {
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

  console.log(show);

  const handleClick = () => {
    show = false;
  };

  return (
    <div>
      <div className={style.div1}>
        {/*style={{ backgroundImage: `url(${image})` }} */}
        <form action="" onSubmit={handleSubmit} className={style.containt}>
          <h1>CREATE YOUR GAME</h1>
          <div className={style.horizontal}>
            <div>
              {/* <p htmlFor="">Name:</p> */}
              <input
                type="text"
                name="name"
                value={indication.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <p className={style.errors}>{errors?.name}</p>
            </div>
            <div>
              {/* <p htmlFor="">Image:</p> */}
              <input
                type="text"
                name="background_image"
                value={indication.background_image}
                onChange={handleInputChange}
                placeholder="Image"
              />
              <p className={style.errors}>{errors?.background_image}</p>
            </div>
          </div>
          <div>
            {/* <p htmlFor="">Description:</p> */}
            <textarea
              name="description"
              value={indication.description}
              onChange={handleInputChange}
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
            ></textarea>
            <p className={style.errorsDescription}>{errors?.description}</p>
          </div>

          <div className={style.horizontal}>
            <div>
              {/* <p htmlFor="">Released:</p> */}
              <input
                type="date"
                name="released"
                value={indication.released}
                onChange={handleInputChange}
              />
              <p className={style.errors}>{errors.released}</p>
            </div>
            <div>
              {/* <p htmlFor="">Rating:</p> */}
              <input
                type="number"
                name="rating"
                step="0.1"
                placeholder="Rating"
                autoComplete="off"
                value={indication.rating}
                onChange={handleInputChange}
              />
              <p className={style.errors}>
                {errors?.rating ? errors?.rating : null}
              </p>
            </div>
          </div>

          <div className={style.horizontal2}>
            <div className={style.vertical}>
              {/* <label htmlFor="">platforms:</label> */}
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
              <div className={style.platf}>
                {indication.platforms.map((ele) => (
                  <p onClick={() => deletePlatform(ele)}>{ele}</p>
                ))}
              </div>
            </div>

            <div className={style.vertical}>
              {/* <label htmlFor="">Genres:</label> */}

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
              <div className={style.platf}>
                {indication.genres.map((ele) => (
                  <p onClick={() => deleteGenres(ele)}>{ele}</p>
                ))}
              </div>
            </div>
          </div>

          <button className={style.create} type="submit">
            Create
          </button>
        </form>
        {}
        {/* <button onClick={handleClick} className={style.exit}>
          Exit
        </button> */}
      </div>
    </div>
  );
};
