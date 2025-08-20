// src/components/AnimeList/AnimeList.tsx
import AnimeCard from "../AnimeCard/AnimeCard";
import { type AnimeType } from "../../services/AnimeService";
import "./CardList.scss";

// Types ---------------------------------------------------------------------------------------
type AnimeListProps = {
  animes: AnimeType[];
  category: "Home" | "Series" | "Movies" | "Favorites";
};

// Component-----------------------------------------------------------------------------------
function CardList({ animes, category }: AnimeListProps) {
  return (
    // This component styling is different depending on the category of the page that contains it
    <div className={`${category === "Home" ? "card_row" : "card_list"}`}>

      {/* AnimeCard is a compound component, the label it shows are dependant on the category
      I wouldnt say it NEEDS to be compound, but I wanted to try compound components */}
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
