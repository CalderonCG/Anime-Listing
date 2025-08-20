import { useEffect, useState } from "react";
import "./Details.scss";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import {
  getAnimeById,
  type AnimeType,
} from "../../services/AnimeService";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";



//Component-----------------------------------------
function Details() {
  //Const and states---------------------------------------
  const { id } = useParams<{ id: string }>();
  const [anime, setAnime] = useState<AnimeType | undefined>(undefined);
  const [loading, setLoading] = useState(true);


  //Functions ----------------------------------------------

  //Gets the data for that id
  const getData = async (id: string): Promise<void> => {
    try {
      const data = await getAnimeById(Number(id));
      if (data) {
        setAnime(data);
      } else {
        setAnime(undefined); //If the anime doesnt exist then it sets undefined
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //UseEffect---------------------------------
  //Fetches the anime on render but only if id exists
  useEffect(() => {
    if (id) { 
      getData(id);
    }
  }, [id]);

  //Component---------------------------------------------------------------
  return loading ? (
    <Loader />
  ) : anime === undefined ? ( //If the anime is undefined shows the notFound component
    <NotFound />
  ) : (
    <div className="details">
      <img className="details_image" src={anime.image} alt="cover" />
      <div className="details_data">
        <h1 className="details_name">{anime.name}</h1>

        <div className="details_labels">
          <p>{anime.type}</p>
          <p>{anime.episodes} episodes</p>
          <p>{anime.duration} min</p>

          <span className="">
            <p>{anime.rating}</p> <MdStar />
          </span>
        </div>
        <div className="details_genres">
          {anime.genre.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
        <div className="details_actions">
          <button className="details_watch">
            <FaPlay />
            <p>Watch now</p>
          </button>
          <button
            className="details_add"
          >
            <IoMdAdd />
            <p>Add to favorites</p>
          </button>
        </div>
        <p className="details_description">{anime.synopsis}</p>
      </div>
    </div>
  );
}

export default Details;
