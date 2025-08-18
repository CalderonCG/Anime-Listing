import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Favorites.scss";

function Favorites() {
  return (
    <div className="favorites">
      <SearchBar />
      <h1 className="favorites_title">My favorite anime</h1>
      <CardList/>
    </div>
  );
}

export default Favorites;
