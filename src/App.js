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
    <div className="absolute flex right-2/4 top-4 z-[91]">
      <ThemeCircle className="btn-retro" setTheme={setTheme} value="" bg="bg-red-600" icon={<SiNetflix className="h-7 w-7" />} />
      <ThemeCircle className="btn-modern" setTheme={setTheme} value="retro" bg="bg-black" icon={<Teletext className="h-7 w-7"/>}/>
    </div>
  )
}

const ThemeCircle = (props) => {
  return (
    <div className={"h-10 w-10 mr-4 rounded-full cursor-pointer text-white flex justify-center align-middle items-center " + props.bg}
    onClick = {() => props.setTheme(props.value)}
    >{props.icon}</div>
  )
}

function App() {
  const [theme, setTheme] = useState("")
  console.log(theme)
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
