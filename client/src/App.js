import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import HomePage from "./pages/HomePage/HomePage";
import PostCard from "./components/PostCard/PostCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
