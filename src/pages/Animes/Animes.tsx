import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Animes.scss";

type AnimeProps={
    title: string;
    category: 'Home'|'Series'|'Movies'|'Favorites'
}

function Animes({title, category}: AnimeProps) {
  return (
    <div className="animes">
      <SearchBar />
      <h1 className="animes_title">{title}</h1>
      <CardList/>
    </div>
  );
}

export default Animes;
