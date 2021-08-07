import React, { useState } from 'react'
import './Contact.css'
import Icon from './Icon'
import { iconImages } from './Contants'
const Contact = () => {
    const [showContactDetails, setshowContactDetails] = useState(false)
    return (
        <div className='contactContainer'>
            {
                iconImages.map(details => <Icon details={details} />)
            }
            <div className='iconContainer'>
                <img src='./phone.png' onClick={()=>setshowContactDetails(!showContactDetails)}/>
            </div>
           {
               showContactDetails &&  <div className='contactDetails'>
               <span>Phone:8886833905</span>
               <span>Email:richardsbenjialfred@gmail.com</span>
           </div>
           }
        </div>
    )
}

export default Contact;
