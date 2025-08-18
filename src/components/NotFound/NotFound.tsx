
import { TbError404 } from "react-icons/tb";
import './NotFound.scss'

function NotFound() {
  return (
    <div className="notFound">
        <TbError404 className="notFound_icon"/>
        <h1>Anime not found</h1>
    </div>
  )
}

export default NotFound