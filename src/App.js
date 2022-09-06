import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



import { BiMoviePlay } from 'react-icons/bi';
import {BsFileRichtextFill} from 'react-icons/bs';



const oldIcon = document.querySelector(".retro");
const newIcon = document.querySelector(".modern");

const userTheme = localStorage.getItem("theme");

const iconToggle = () => {
   oldIcon.classList.toggle("display-none");
   newIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
    oldIcon.classList.add("display-none");
    return;
  }
  newIcon.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme","light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme","dark");
  iconToggle();
}

{/*
oldIcon.addEventListener("click", () => {
 themeSwitch();
});

newIcon.addEventListener("click", () => {
  themeSwitch();
 });

 themeCheck(); */}


function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <BiMoviePlay className="text-white text-3xl absolute right-2/4 top-4 modern z-[100] cursor-pointer"/>
    <BsFileRichtextFill className="text-white text-3xl absolute right-2/4 top-4 retro z-[100] cursor-pointer"/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
