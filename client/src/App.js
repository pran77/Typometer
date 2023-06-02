// import './App.css';
// import InputAndParagraph from "./InputAndParagraph";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import GuestHome from "./components/GuestHome.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Profilepage from "./components/Profilepage.jsx";
import Firstpage from "./components/Firstpage.jsx";


function App() {
  const { user } = useContext(AuthContext)
  return (
  <Router>
    <Routes>
    <Route path='/' element={<Firstpage/>} />

    <Route path='/home' element={<Home/>  } />

    <Route path='/ghome' element={<GuestHome/>  } />

    <Route path='/about' element={<About/>} />    

    <Route path='/login' element={user ? <Navigate to = '/home' /> : <Login />} />

    <Route path='/register' element={user ? <Navigate to = '/login' /> : <Register />} />

    <Route path='/contact' element={<Contact />} />

    <Route path='/profile' element={<Profilepage />} />
    </Routes> 
  </Router>
  )
}
export default App;