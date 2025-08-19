import './FilterCard.scss'


function FilterCard({genre} : {genre:string}) {
  return (
    <button className='filter'>{genre}</button>
  )
}

export default FilterCard