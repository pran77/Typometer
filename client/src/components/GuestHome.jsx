import React from 'react';
import GuestNavbar from '../components/GuestNavbar.jsx';
import InputAndParagraph from '../InputAndParagraph';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';


export default function GuestHome() {
  return (
    <div>
      <GuestNavbar />
      <InputAndParagraph />
      <About />
      <Contact/>
    </div>
  )
}
