import { useState, useRef, useEffect, type ReactNode } from "react";
import "./Filter.scss";
import { FaFilter } from "react-icons/fa";

type FiltersProp = {
  children: ReactNode;
};

function Filters({ children }: FiltersProp) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Useref para cerrar el menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filters" ref={menuRef}>
      <button
        className="filters_button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FaFilter/>
        <p>Filters</p>
      </button>

      {showMenu && <div className="filters_menu">{children}</div>}
    </div>
  );
}

export default Filters;
