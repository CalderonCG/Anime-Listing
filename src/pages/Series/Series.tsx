import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Series.scss";

function Series() {
  return (
    <div className="series">
      <SearchBar />
      <h1 className="series_title">TV anime series</h1>
      <CardList/>
    </div>
  );
}

export default Series;
