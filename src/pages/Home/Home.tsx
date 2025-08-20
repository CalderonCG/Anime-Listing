import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAnimes } from "../../services/AnimeService";
import "./Home.scss";
import RatedList from "../../components/RatedList/RatedList";

function Home() {
  const { animes, loading } = useAnimes("Home"); //Fetches the complete anime list, saves the list in "animes"
  const [search, setSearch] = useState(""); //Search state
  const highestRated = animes.sort((a, b) => b.rating - a.rating); //Sorted list by rating

  //Filteres list by rating for the CardList component, slices the first 3 because they will be showed in RatedList
  const filteredList = highestRated
    .slice(3)
    .filter((anime) => anime.name.toLowerCase().startsWith(search.trim()));
  return (
    <div className="home">
      {/* Search controls ------------------------------------------------- */}
      <div className="home_controls">
        <SearchBar value={search} handleSearch={setSearch} />
      </div>

      {/* Top 3 rated animes ------------------------------------------------- */}
      <h1 className="home_title">Top rated anime</h1>
      <RatedList animes={highestRated} />

      
      {/* Rest of the animes ------------------------------------------------- */}
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
