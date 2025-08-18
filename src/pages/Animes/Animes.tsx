import AnimeCard from "../../components/AnimeCard/AnimeCard";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAnimes } from "../../services/AnimeService";
import "./Animes.scss";

type AnimeProps = {
  title: string;
  category: "Home" | "Series" | "Movies" | "Favorites";
};

function Animes({ title, category }: AnimeProps) {
  const { animes, loading } = useAnimes(category);
  console.log(animes);
  return (
    <div className="animes">
      <SearchBar />
      <h1 className="animes_title">{title}</h1>
      {loading ? (
        <Loader />
      ) : (
        <CardList>
          {animes.map((anime) => (
            <AnimeCard
              key={anime.id}
              image={anime.image}
              name={anime.name}
              genre={anime.genre}
            >
              <AnimeCard.Labels>
                <p>{anime.release_date}</p>
               {(category === "Home" || category === "Favorites") && <p>{anime.type}</p>}
              </AnimeCard.Labels>
            </AnimeCard>
          ))}
        </CardList>
      )}
    </div>
  );
}

export default Animes;
