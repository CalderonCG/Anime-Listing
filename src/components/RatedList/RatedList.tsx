import type { AnimeType } from "../../services/AnimeService"
import RatedCard from "../RatedCard/RatedCard"
import './RatedList.scss'
type RatedProps={
    animes: AnimeType[]
}


function RatedList({animes}: RatedProps) {
  return (

    
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