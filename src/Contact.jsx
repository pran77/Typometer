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
                <ul className='list-unstyled'>
                    <li className='list-heading'>Address</li>
                    <li>Room No. 62</li>
                    <li>Sengupta Hall, IIESTS</li>
                    <li>Howrah, WB 711103</li>
                </ul>
            </div>

            <div className="col">
                {/* <h4>Social Media</h4> */}
                <ul className='list-unstyled'>
                    <li className='list-heading'>Social Media</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div className="col">
                {/* <h4>Contact Us</h4> */}
                <ul className='list-unstyled'>
                    <li className='list-heading'>Contact Us</li>
                    <li>+91 6386479832</li>
                    <li>+91 7505557968</li>
                    <li>+91 6295160527</li>
                </ul>
            </div>
            
        </div>
        <div className='line'><hr/></div>
        <div className="row-bottom">
            <p className='col-sm'>
                &copy;{new Date().getFullYear()} Typometer&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; All rights reserved &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp; &nbsp;&nbsp;Terms of Services &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp; &nbsp;&nbsp;Privacy
            </p>
        </div>
      </div>
    </div>
 </div>
  )
}
