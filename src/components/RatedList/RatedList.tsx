import type { AnimeType } from "../../services/AnimeService"
import RatedCard from "../RatedCard/RatedCard"
import './RatedList.scss'
type RatedProps={
    animes: AnimeType[]
}


function RatedList({animes}: RatedProps) {
  const highestRated= animes.sort((a, b) => b.rating - a.rating);
  console.log(highestRated)
  return (

    
    <div className="rated_list">
      {highestRated.slice(0,3).map((anime)=>
      
        <RatedCard key={anime.id} id={anime.id} name={anime.name}
        synopsys={anime.synopsis} image={anime.image}
        />
      )}
    </div>
  )
}

export default RatedList