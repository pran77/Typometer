import React from 'react'
import '../styles/firstpage.css'
import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import Typed from "typed.js";
export default function Firstpage() {
  const [stage, changeStage] = useState(1);
  const per = useRef();
  const profile = useRef();
  useEffect(() => {
    var id = setInterval(() => {
      var tmp = per.current.innerText;
      var cur = parseInt(tmp);
      cur = cur + 1;
      per.current.innerText = Math.min(cur, 100);
      if (cur >= 100) {
        clearInterval(id);
        changeStage(9);
      }
    }, 60);
    return () => clearInterval(id);
  }, []);
  
 
  useEffect(() => {
    const pArray = [
      "Hello Everyone !",
      "Welcome to Typometer . . .",
      "Typometer, a website that is used to measure typing parameters . . .",
      "Parameters such as . . . ",
      "=> Typing Speed of the User .",
      "=> Accuracy of the text .",
      "=> Time Taken by the User in writing the complete paragraph .",
      "=> Correct Words in the text written .",
      "=> Incorrect Words in the text written ." 

    ];
    var idx = 0,
      cur = 0,
      delay = 0,
      ck = 0;

    setInterval(() => {
      if(delay === 10) delay = 0

      if(delay > 0) {
        delay += 1
        return
      }

      if (idx === -1 && ck === 1) {
        cur = cur + 1;
        idx = 1;
        ck = 0;
        if (cur === pArray.length) cur = 0;
        profile.current.innerText = "";
      } else if (idx === pArray[cur].length) {
        ck = 1;
        idx = idx - 1;
        delay = 1
      }

      let tmpString = pArray[cur].substring(0, idx + 1);
      profile.current.innerText = tmpString;
      if (ck === 0) idx++;
      else idx--;
    }, 100);
  }, []);

  return (
    <div>
      <div className='o'>
        <div className='o-wrapper'>
            <h1 className='o-heading'>TYPOMETER</h1>
            <div className='o-tagline'>
            <div
                className="profile-text"
                ref={profile}
              ></div>

            <div className='o-category'>
                <h1 className='cat-head'>Choose the Category! As per your Conscience</h1>
                <ul className='cat-list'>
                    <li className='li1'>1.  Check it out as a <a href='/home'>Guest User</a></li>
                    <li className='li2'>2.  Make the profile ! Build your progress report by <a href='/register'>Register</a></li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
