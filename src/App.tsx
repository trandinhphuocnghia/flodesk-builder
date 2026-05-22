import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GalleryPage } from "./pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
