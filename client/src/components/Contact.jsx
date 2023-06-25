import React from 'react'
import "../styles/contact.css"


export default function Contact() {
  return (
    <div id="contacts">
    <div className='main-Footer'>
      <div className='container'>
        <div className='row'>
           
            <div className="col">
                <ul className='list-unstyled'>
                    <li className='list-heading'>Address</li>
                    <li className='address-list'>Room No. 62</li>
                    <li className='address-list'>Sengupta Hall, IIESTS</li>
                    <li className='address-list'>Howrah, WB 711103</li>
                </ul>
            </div>

            <div className="col">
                
                <ul className='list-unstyled'>
                    <li className='list-heading'>Social Media</li>
                    <li ><a className='social-list' href='https://www.instagram.com/pran_77/'>Instagram</a></li>
                    <li ><a className='social-list' href='https://www.linkedin.com/in/praveen-singh-aabaa0189/'>LinkedIn</a></li>
                    <li ><a className='social-list' href='https://twitter.com/DEVSHAR45644265'>Twitter</a></li>
                </ul>
            </div>

            <div className="col">
                <ul className='list-unstyled'>
                    <li className='list-heading'>Contact Us</li>
                    <li className='contact-list'>+91 6386479832</li>
                    <li className='contact-list'>+91 7505557968</li>
                    <li className='contact-list'>+91 6295160527</li>
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
