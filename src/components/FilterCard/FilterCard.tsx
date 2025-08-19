import "./FilterCard.scss";


type HandleFilterProps = {key: 'year'|'rating' , value:number} | {key: 'genres', value: string}
type FilterProps = {
  genre: string;
  active: boolean;
  handleSelected: ({ key, value }: HandleFilterProps) => void
};

function FilterCard({ genre, active, handleSelected }: FilterProps) {
  return (
    <button className={`filter ${active ? "active" : ""}` }
    onClick={()=>handleSelected({key: 'genres',value: genre})}
    >{genre}</button>
  );
}

export default FilterCard;
