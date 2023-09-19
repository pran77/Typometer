import React from 'react'
import "../styles/contact.css"


export default function Contact() {
  return (
    <div id="contacts">
    <div className='main-Footer'>
      <div class='container'>
        <div class='row'>
           
            <div class="col-4">
                <ul className='list-unstyled'>
                    <li className='list-heading'>Address</li>
                    <li className='address-list'>Room No. 62</li>
                    <li className='address-list'>Sengupta Hall, IIESTS</li>
                    <li className='address-list'>Howrah, WB 711103</li>
                </ul>
            </div>

            <div class="col-4">
                
                <ul className='list-unstyled'>
                    <li className='list-heading'>Social Media</li>
                    <li ><a className='social-list' href='https://www.instagram.com/pran_77/'>Instagram</a></li>
                    <li ><a className='social-list' href='https://www.linkedin.com/in/praveen-singh-aabaa0189/'>LinkedIn</a></li>
                    <li ><a className='social-list' href='https://twitter.com/DEVSHAR45644265'>Twitter</a></li>
                </ul>
            </div>

            <div class="col-4">
                <ul className='list-unstyled'>
                    <li className='list-heading'>Contact Us</li>
                    <li className='contact-list'>+91 6386479832</li>
                    <li className='contact-list'>+91 7505557968</li>
                    <li className='contact-list'>+91 6295160527</li>
                </ul>
            </div>
            
        </div>
        <div className='line'><hr/></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class='col-12' className='privacy'>
                    &copy;{new Date().getFullYear()} Typometer&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; All rights reserved &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp; &nbsp;&nbsp;Terms of Services &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp; &nbsp;&nbsp;Privacy
                </div>
            </div>
        </div>
      </div>
    </div>
 </div>
  )
}
