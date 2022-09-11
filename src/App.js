import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import {SiNetflix} from 'react-icons/si';
import {ReactComponent as Teletext} from './assets/Videotext.svg';
import { useState } from "react";

const ThemeButton = ({setTheme}) => {
  return(
    <div className="absolute left-1/2 transform -translate-x-1/2 top-5 sm:top-6 z-[50]">
      <ThemeCircle setTheme={setTheme} value="" icon={<SiNetflix className="h-7 w-7 sm:h-8 sm:w-8 p-1 btn-modern" />} />
      <ThemeCircle setTheme={setTheme} value="retro" icon={<Teletext className="h-7 w-7 sm:h-8 sm:w-8 p-1 btn-retro"/>}/>
    </div>
  )
}

const ThemeCircle = (props) => {
  return (
    <div className={"cursor-pointer switchcircle"}
    onClick = {() => props.setTheme(props.value)}
    >{props.icon}</div>
  )
}

function App() {
  const [theme, setTheme] = useState("")
  return (
    <div className={theme === "retro" ? "retro-theme" : ""}>
    <AuthContextProvider>
    <Navbar />
    <ThemeButton setTheme = {setTheme}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
    </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
