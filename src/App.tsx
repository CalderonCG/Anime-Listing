import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Animes from "./pages/Animes/Animes";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app_container">
      {/* Sidebar is always in the window for all these components */}
      <SideBar />
      <Routes>
        {/* Home element with highest rated anime listing */}
        <Route path="/" element={<Home/>} />


        {/* Anime listing components, reutilize one single page component and just changes the content because the layout and 
        styling is the same*
        Is this optimal? Should I take a different approach? */}
        <Route path="/series" element={<Animes title="Anime TV series" category="Series"/>} />
        <Route path="/movies" element={<Animes title="Anime movies" category="Movies"/>} />
        <Route path="/favorites" element={<Animes title="My favorite anime" category="Favorites"/>} />
        
        {/* Dynamic path with id, shows the details of the anime */}
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
