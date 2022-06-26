import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AllActivity from "./pages/AllActivity/AllActivity";
import Login from "./pages/Login/Login"
// import Register from "./pages/Register/Register"
import Post from "./pages/post/Post";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<AllActivity />} />
        <Route path="/new" element={<AllActivity />} />
        {/* use login page here */}
        <Route path="/login" element={<Login />} />
        {/* use sign in page here */}
        <Route path="/register" element={<AllActivity />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
