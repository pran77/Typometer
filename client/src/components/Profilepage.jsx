import "../styles/Profilepage.css";
import React from 'react'
import "../components/Navbar";
// import {AccountCircle} from "@mui/icons-material";
// import Navbar from "../components/Navbar";
// import { useRef } from 'react';
// import axios from './../utils/client.js';
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

export default function Profilepage() {

  const loggedInUser = sessionStorage.getItem('user');
  const user = JSON.parse(loggedInUser)
  // const username = loggedInUser.split(',')[1].split(':')[1].split('"')[1]
  // console.log(username)
  // console.log(username.length)

  const username = user.username;
  console.log(username);

  // const func = async(e) => {
  //   e.preventDefault();
  //   const resp = await axios.get(`/api/users/?username=${username}`);
  //   console.log(resp);
  // }

  return (
    <div>
      <div>username : {user.username}</div>
      <div>email: {user.email}</div>
      <div>isAdmin: {user.isAdmin === true ? "Yes" : "No" }</div>
      <div>createdAt: {user.createdAt}</div>
    </div>
  )
}
