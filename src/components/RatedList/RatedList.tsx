import type { AnimeType } from "../../services/AnimeService"
import RatedCard from "../RatedCard/RatedCard"
import './RatedList.scss'


//Types-------------------------------------------
type RatedProps={
    animes: AnimeType[]
}

//Component-------------------------------------------
function RatedList({animes}: RatedProps) {
  return (
    //Takes just the first 3 elements of the highest rated animes
    <div className="rated_list">
      {animes.slice(0,3).map((anime)=>
      
        <RatedCard key={anime.id} id={anime.id} name={anime.name}
        synopsys={anime.synopsis} image={anime.image}
        />
      )}
    </div>
  )
}

export default RatedList