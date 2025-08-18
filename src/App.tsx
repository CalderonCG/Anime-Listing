import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Animes from "./pages/Animes/Animes";

function App() {
  return (
    <div className="app_container">
      <SideBar />
      <Routes>
        <Route path="/" element={<Animes title="Explore" category="Home"/>} />
        <Route path="/series" element={<Animes title="Anime TV series" category="Series"/>} />
        <Route path="/movies" element={<Animes title="Anime movies" category="Movies"/>} />
        <Route path="/favorites" element={<Animes title="My favorite anime" category="Favorites"/>} />
      </Routes>
    </div>
  );
}

export default App;
