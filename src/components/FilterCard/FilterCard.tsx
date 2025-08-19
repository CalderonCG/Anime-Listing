import "./FilterCard.scss";

type FilterProps = {
  genre: string;
  active: boolean;
  handleSelected: (selectedGenre: string) => void
};

function FilterCard({ genre, active, handleSelected }: FilterProps) {
  return (
    <button className={`filter ${active ? "active" : ""}` }
    onClick={()=>handleSelected(genre)}
    >{genre}</button>
  );
}

export default FilterCard;
