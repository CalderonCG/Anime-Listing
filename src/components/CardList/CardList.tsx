// src/components/AnimeList/AnimeList.tsx
import AnimeCard from "../AnimeCard/AnimeCard";
import { type AnimeType } from "../../services/AnimeService";

type AnimeListProps = {
  animes: AnimeType[];
  category: "Home" | "Series" | "Movies" | "Favorites";
};

function CardList({ animes, category }: AnimeListProps) {
  return (
    <div className="card_list">
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
    </div>
  );
}

export default CardList;
