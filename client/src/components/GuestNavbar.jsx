import "../styles/navbar.css";
// import About from "./About";
// import { Link } from 'react-router-dom';
// import { Search,Person,Chat,Notifications } from "@mui/icons-material";
// import Profile from "../../img/profile.png"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { AccountCircle } from "@mui/icons-material";
// import Profilepage from "./Profilepage";
// import Home from "../components/Home"
// import {
//   View,
// } from 'react-native';

export default function GuestNavbar(){
  const { user } = useContext(AuthContext);
  console.log(user);
  const loggedInUser = sessionStorage.getItem('user');
  console.log(loggedInUser);

  return (
    <div className="topbarContainer">

        <div className="topbar-left">
            <span className="logo">
                TYPOMETER
            </span>   
        </div>
        <div className="topbar-right">
            <div className="topbar-links">
                <ul>
                    <li className="topbar-link"><a href='/'>Home</a></li>
                    <li className="topbar-link"><a href='#about'>About</a></li>
                    <li className="topbar-link"><a href='#contacts'>Contact</a></li>
                    <li className="topbar-link"><a href='/register' className="sign-up">Sign Up</a></li>
                </ul>
                
            </div>
            
        </div>
    </div>
  )
};


