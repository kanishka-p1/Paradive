import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AllActivity from "./pages/AllActivity/AllActivity";
import Activity from "./pages/Activity/Activity";
// import Login from "./pages/Login/Login"
// import Register from "./pages/Register/Register"
import Post from "./pages/post/Post";


function App() {
  return (
    <BrowserRouter>
      <Routes>



        {/* <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<AllActivity />} />
        <Route path="/new" element={<AllActivity />} />

        <Route path="/login" element={<AllActivity />} />
  
        <Route path="/register" element={<AllActivity />} />
        <Route path="/posts/:id" element={<Post />} /> 
        */}

        <Route path="/" >

          {/* route for homepage  */}
          <Route index element={<HomePage />} />

          {/* routes for login and register */}
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="register" element={<Register />} />  */}

          {/* route for new post */}
          {/* <Route path="new" element={<CreatePost />} /> */}

          {/* route for activities */}
          <Route path="activities" >
            <Route index element={<AllActivity />} />
            {/* takes to a particular activity */}
            <Route path=":id">
              <Route index element={<Activity />} />
              <Route path=":id">
                <Route index element={<Post />} />
                {/* <Route path="/edit" element={<EditPost />}/> */}
              </Route>
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
