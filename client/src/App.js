import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage"
import Activity from "./pages/Activity/Activity";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Post from "./pages/post/Post";
import CreatePost from "./pages/createPost/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/new" element={<CreatePost />} />
        <Route path="explore" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
