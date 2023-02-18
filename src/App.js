// import './App.css';
// import InputAndParagraph from "./InputAndParagraph";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import About from "./About";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./Contact";
// import {Route,Switch} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home/>} />

    <Route path='/about' element={<About/>} />    

    <Route path='/login' element={<Login/>} />

    <Route path='/register' element={<Register/>} />

    <Route path='/contact' element={<Contact/>} />

    </Routes> 
  </BrowserRouter>
  
  )
}

export default App;