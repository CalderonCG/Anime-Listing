import { useState, type ReactNode } from "react";
import "./Filter.scss";
import FilterCard from "../FilterCard/FilterCard";

type FiltersProp ={
    children: ReactNode
}

function Filters({children}: FiltersProp) {
  const [showMenu, setShowMenu] = useState(false);





  return (
    <div className="filters">
      <button className="filters_button" onClick={() => setShowMenu(!showMenu)}>
        Filters
      </button>

      {showMenu && (
        <div className="filters_menu">
            {children}

        </div>
      )}
    </div>
  );
}

export default Filters;
