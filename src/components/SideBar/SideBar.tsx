import './SideBar.scss'
import { MdMovie, MdBookmark  } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";
import { RiFilmFill } from "react-icons/ri";
import { TbDeviceTvFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

function SideBar() {
  return (
    <div className='sidebar'>
        <MdMovie className='sidebar_main'/>

        <div className='sidebar_navigation'>
            <HiSquares2X2 className='sidebar_navigation_icon'/>
            <RiFilmFill className='sidebar_navigation_icon'/>
            <TbDeviceTvFilled className='sidebar_navigation_icon'/>
            <MdBookmark className='sidebar_navigation_icon'/>
        </div>

        <FaUser className='sidebar_avatar'/>
    </div>
  )
}

export default SideBar