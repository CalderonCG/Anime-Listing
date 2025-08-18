import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Movies.scss";

function Movies() {
  return (
    <div className="movies">
      <SearchBar />
      <h1 className="movies_title">Anime movies</h1>
      <CardList/>
    </div>
  );
}

export default Movies;
