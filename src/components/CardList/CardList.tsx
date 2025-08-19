// src/components/AnimeList/AnimeList.tsx
import AnimeCard from "../AnimeCard/AnimeCard";
import { type AnimeType } from "../../services/AnimeService";
import "./CardList.scss";

type AnimeListProps = {
  animes: AnimeType[];
  category: "Home" | "Series" | "Movies" | "Favorites";
};

function CardList({ animes, category }: AnimeListProps) {
  return (
    <div className={`${category === "Home" ? "card_row" : "card_list"}`}>
      {animes.map((anime) => (
        <AnimeCard
          id={anime.id}
          key={anime.id}
          image={anime.image}
          name={anime.name}
          genre={anime.genre}
        >
          <AnimeCard.Labels>
            {category !== "Home" && <p>{anime.release_date}</p>}
            {category === "Favorites" && <p>{anime.type}</p>}
          </AnimeCard.Labels>
        </AnimeCard>
      ))}
    </div>
  );
}

export default CardList;
