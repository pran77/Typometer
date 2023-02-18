import React from 'react';
import Navbar from './Navbar';
import InputAndParagraph from './InputAndParagraph';
import About from './About';
import Contact from './Contact';
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
