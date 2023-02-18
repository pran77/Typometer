import React from 'react'
import Cards from './Cards'
import "./about.css"
import { images_data } from './data'
export default function About() {
  return (
    <div id='about'>
      <div className='a'>
        <div className='a-wrapper'>
            <h1 className='a-title' id='heading'>About</h1>
          <div className='a-text'>
            <b >Typometer is a typing test website. A user can check his/her typing speed based on the test given.
              In this test either user will complete the test or he/she can submit it in between. On the basis of time occurs user will get to know the result
              of the test after submission. 
              Your result includes the Speed, Time taken, Accuracy, number of correct and incorrect words.
            </b>
          </div>
          <h2 className='feature-head'>Let's see the features...</h2>
          <div className='features'> 
           {images_data.map((item) =>(
                <Cards key={item.id} img={item.img}/>
           ))}
            
          </div>
        </div>      
      </div>
    </div>
  )
}
