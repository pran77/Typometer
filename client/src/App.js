// import './App.css';
// import InputAndParagraph from "./InputAndParagraph";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
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


function App() {
  const { user } = useContext(AuthContext)
  return (
  <Router>
    <Routes>

    <Route path='/' element={<Home/>} />

    <Route path='/about' element={<About/>} />    

    <Route path='/login' element={user ? <Navigate to = "/"/> : <Login />} />

    <Route path='/register' element={user ? <Navigate to = "/"/> : <Register />} />

    <Route path='/contact' element={<Contact/>} />

    </Routes> 
  </Router>
  
  )
}

export default App;