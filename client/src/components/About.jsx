import React from 'react'
import Cards from './Cards'
import "../styles/about.css"
import { images_data } from '../data'
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
          <h2 className='feature-head'>Let's see the features...</h2>
          <div className='features'> 
           {images_data.map((item) =>(
                <Cards key={item.id} img={item.img} title={item.title} text={item.text}/>
           ))}
            
          </div>
        </div>      
      </div>
    </div>
  )
}
