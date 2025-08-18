import type { AnimeType } from "../../services/AnimeService"
import RatedCard from "../RatedCard/RatedCard"

type RatedProps={
    animes: AnimeType[]
}


function RatedList({animes}: RatedProps) {
  return (
    <div className="rated_list">
        <RatedCard/>
    </div>
  )
}

export default RatedList