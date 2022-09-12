import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import {ReactComponent as TXTflix} from './assets/txtflix-T.svg';
import {ReactComponent as TXTflixold} from './assets/txtflix-retro-T.svg';
import { useState } from "react";

const ThemeButton = ({setTheme}) => {
  return(
      <div className="fixed top-1/2 transform -translate-y-1/2 right-0 z-[20]">
        <ThemeCircle setTheme={setTheme} value="" icon={<TXTflix className="h-10 w-10 mr-1 p-2 btn-modern fill-white hover:fill-red-600" />} />
        <ThemeCircle setTheme={setTheme} value="retro" icon={<TXTflixold className="h-10 w-10 mr-1 p-2 btn-retro fill-gray-900 hover:fill-red-600"/>}/>
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
