import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AllActivity from "./pages/AllActivity/AllActivity";
<<<<<<< HEAD
import Activity from "./pages/Activity/Activity";
// import Login from "./pages/Login/Login"
// import Register from "./pages/Register/Register"
=======
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
>>>>>>> 695b45a530936dd986f7f2f28b376cc16b73658c
import Post from "./pages/post/Post";


function App() {
  return (
    <BrowserRouter>
      <Routes>



        {/* <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<AllActivity />} />
        <Route path="/new" element={<AllActivity />} />
<<<<<<< HEAD

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
=======
        {/* use login page here */}
        <Route path="/login" element={<Login />} />
        {/* use sign in page here */}
        <Route path="/register" element={<Register />} />
        <Route path="/posts/:id" element={<Post />} />
>>>>>>> 695b45a530936dd986f7f2f28b376cc16b73658c
      </Routes>
    </BrowserRouter>
  );
}

export default App;
