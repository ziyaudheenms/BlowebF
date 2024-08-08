import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Create from "./Components/Create";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProfileBuilder from "./Components/ProfileBuilder";
import SinglePage from "./Components/SinglePage";
import NotFound from "./Components/NotFound";
import ClickProfile from "./Components/ClickProfile";
import Users from "./Components/Users";
import EditPost from "./Components/EditPost";

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/buildprofile" element={<ProfileBuilder />}/>
          <Route path="/SinglePage" element={<SinglePage />}/>
          <Route path="/Create" element={<Create />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/ClickProfile" element={<ClickProfile />}/>
          <Route path="/Users" element={<Users />}/>
          <Route path="/EditBlog" element={<EditPost />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
    </>
  );
}

export default App;
