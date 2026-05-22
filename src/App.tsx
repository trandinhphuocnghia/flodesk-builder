import { Route, Routes } from "react-router-dom";
import { EditorPage, GalleryPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path={"/:id/build"} element={<EditorPage />} />
    </Routes>
  );
}

export default App;
