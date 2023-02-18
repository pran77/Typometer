import React from 'react'
import "./contact.css"
export default function Contact() {
  return (
    <div id="contacts">
    <div className='main-Footer'>
      <div className='container'>
        <div className='row'>
            {/* Coloumn1 */}
            <div className="col">
                <h4>Address</h4>
                <ul className='list-unstyled'>
                    <li>3333-4444-5555</li>
                    <li>California, USA</li>
                    <li>Bay area, 24 street</li>
                </ul>
            </div>

            <div className="col">
                <h4>Social Media</h4>
                <ul className='list-unstyled'>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div className="col">
                <h4>Contact Us</h4>
                <ul className='list-unstyled'>
                    <li>Delhi</li>
                    <li>Gujrat</li>
                    <li>Mumbai</li>
                </ul>
            </div>

            <div className="col">
                <h4>Contact Us</h4>
                <ul className='list-unstyled'>
                    <li>Delhi</li>
                    <li>Gujrat</li>
                    <li>Mumbai</li>
                </ul>
            </div>
            
            
        </div>
        <hr/>
        <div className="row">
            <p className='col-sm'>
                &copy;{new Date().getFullYear()} Typometer&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; All right reserved &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp; &nbsp;&nbsp;Terms of Services &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp; &nbsp;&nbsp;Privacy
            </p>
        </div>
      </div>
    </div>
 </div>
  )
}
