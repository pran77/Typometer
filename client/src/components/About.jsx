import React from 'react'
import Cards from './Cards'
import "../styles/about.css"
import { images_data } from '../data'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div id='about'>
      <div className='a'>
        <div className='a-wrapper'>
            <h1 className='a-title' id='heading'>About</h1>
          <div className='a-text'>
            <b >Typometer is a typing test website in which a user can check his/her typing parameters by writing the text based on the paragraph generated.
              In this exercise either user will complete the test or can submit it whenever he/she wants. On the basis of time elapsed user will get to know the result
              of the test after submission. 
              The result includes the Speed, Time taken, Accuracy, number of correct and incorrect words.
            </b>
          </div>
          <div className='feature-head'>Let's see the features...</div>
          <div class='container'>
            <div class='row'>
             {images_data.map((item) =>(
                <div class='col-md'>
                  <Cards key={item.id} img={item.img} title={item.title} text={item.text}/>
                </div>
              ))} 
            </div>
          </div>
        </div>      
      </div>
    </div>
  )
}
