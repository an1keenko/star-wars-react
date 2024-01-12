import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./components/Home.tsx";
import CharacterCard from "./components/CharacterPage.tsx";
import { Favourites } from "./components/Favourites.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/characters/:id" element={<Layout />}>
        <Route index element={<CharacterCard />} />
      </Route>
      <Route path="/favourites" element={<Layout />}>
        <Route index element={<Favourites />} />
      </Route>
    </Routes>
  );
}

export default App;
