import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAnimes } from "../../services/AnimeService";
import "./Home.scss";
import RatedList from "../../components/RatedList/RatedList";

function Home() {
  const { animes, loading } = useAnimes("Home");
  const [search, setSearch] = useState("");

  const highestRated = animes.sort((a, b) => b.rating - a.rating);

  //Buscador
  const filteredList = highestRated.slice(3).filter((anime) =>
    anime.name.toLowerCase().startsWith(search.trim())
  );
  return (
    <div className="home">
      <SearchBar value={search} handleSearch={setSearch} />

      <h1 className="home_title">Top rated anime</h1>
      <RatedList animes={highestRated} />
      <h1 className="home_title">Explore</h1>
      {loading ? (
        <Loader />
      ) : (
        <CardList animes={filteredList} category="Home" />
      )}
    </div>
  );
}

export default Home;
