import AnimeCard from "../../components/AnimeCard/AnimeCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <SearchBar />
      <h1 className="home_title">Explore</h1>
      <div className="card_list">
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </div>
  );
}

export default Home;
