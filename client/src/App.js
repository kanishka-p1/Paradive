import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import HomePage from "./pages/HomePage/HomePage";
import PostCard from "./components/PostCard/PostCard";

function App() {
  return (
    <BrowserRouter>
      <div classname="activitycard">
        <div className="cardelement">
          <Card
            title="Rafting"
            imageUrl="https://harstuff-travel.org/wp-content/uploads/2019/08/rafting.jpg"
          />
        </div>
        <div className="cardelement">
          <Card
            title="Banana Boat"
            imageUrl="https://cdn.shopify.com/s/files/1/0477/4055/1326/products/bananaboat.jpg?v=1602343901"
          />
        </div>
        <div className="cardelement">
          <Card
            title="Hang Gliding"
            imageUrl="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/og-for-Hang-gliding-in-Brazil_4th-feb.jpg"
          />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<PostCard />} />
      </Routes>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
