import "./SideBar.scss";
import { MdMovie, MdBookmark } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";
import { RiFilmFill } from "react-icons/ri";
import { TbDeviceTvFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <MdMovie className="sidebar_main" />

      <div className="sidebar_navigation">
        <Link to="/">
          <HiSquares2X2 className="sidebar_navigation_icon" />
        </Link>
        <Link to="series">
          <RiFilmFill className="sidebar_navigation_icon" />
        </Link>

        <Link to="movies">
          <TbDeviceTvFilled className="sidebar_navigation_icon" />
        </Link>

        <Link to="favorites">
          <MdBookmark className="sidebar_navigation_icon" />
        </Link>
      </div>

      <FaUser className="sidebar_avatar" />
    </div>
  );
}

export default SideBar;
