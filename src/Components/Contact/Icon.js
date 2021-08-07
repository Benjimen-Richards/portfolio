import React from 'react'
import './Contact.css'
const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <a href={props.details.href}><img src={props.details.img} /></a>
        </div>
    )
}

export default Icon
