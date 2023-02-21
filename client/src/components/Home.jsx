import React from 'react';
import Navbar from '../components/Navbar.jsx';
import InputAndParagraph from '../InputAndParagraph';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
// import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <InputAndParagraph />
      <About />
      <Contact/>
    </div>
  )
}
