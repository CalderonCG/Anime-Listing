import './YearFilter.scss'

//Types------------------------------------------------------

type HandleFilterProps = {key: 'year'|'rating' , value:number} | {key: 'genres', value: string}
type YearProps={
    value: number,
    handleFilter: ({ key, value }: HandleFilterProps) => void
}



//Component-------------------------------------------
function YearFilter({value, handleFilter}:YearProps) {
  return (
    <div className='rating_filter'>
      <p>Release year limit: </p>
      <input   type="number"
  step="1"
  min="1970"
  value={value}
  max="2025" 
  onChange={(e)=>handleFilter({key:'year',value: Number(e.target.value)})}
  className='year_filter_input'/>
    </div>
  );
}

export default YearFilter;
