import { MoonLoader } from "react-spinners";
import './Loader.scss'

function Loader() {
  return (
    <div className="loader">
      <MoonLoader
        size={50}
        color="#fe4648"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;