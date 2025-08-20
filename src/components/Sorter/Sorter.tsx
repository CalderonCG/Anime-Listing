import { useState, useRef, useEffect} from "react";
import "./Sorter.scss";
import { FaSort } from "react-icons/fa";

// Types -----------------------------------------
type SorterProps={
    handleSelection : React.Dispatch<React.SetStateAction<"Newer" | "Older" | "Rating">>,
}

//Components---------------------------------------------
function Sorter({handleSelection} : SorterProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Useref that controls when the user clicks outside of the menu
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

  //Function that updates the sorting option and closes the menu
  const handleOnClick= (value: 'Newer'|'Older'|'Rating') => {
    handleSelection(value)
    setShowMenu(false)
  }

  return (
    <div className="sorter" ref={menuRef}>
      <button
        className="sorter_button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FaSort/>
        <p>Sort</p>
      </button>

      {showMenu && <div className="sorter_menu">
        <button onClick={()=>handleOnClick('Newer')}>Newer</button>
        <button onClick={()=>handleOnClick('Older')}>Older</button>
        <button onClick={()=>handleOnClick('Rating')}>Higher rating</button>
        </div>}
    </div>
  );
}

export default Sorter;
