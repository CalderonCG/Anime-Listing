import "./FilterCard.scss";

//Types------------------------------------------------------
//This HandleFilterProps is used in the 3 filter components, but I'm not sure if it's worth making an export for it when
//it is this short and it would be the only exported type for the filters
type HandleFilterProps = {key: 'year'|'rating' , value:number} | {key: 'genres', value: string}
type FilterProps = {
  genre: string;
  active: boolean;
  handleFilter: ({ key, value }: HandleFilterProps) => void
};


//Component-------------------------------------------
function FilterCard({ genre, active, handleFilter }: FilterProps) {
  return (
    <button className={`filter ${active ? "active" : ""}` }
    onClick={()=>handleFilter({key: 'genres',value: genre})}
    >{genre}</button>
  );
}

export default FilterCard;
