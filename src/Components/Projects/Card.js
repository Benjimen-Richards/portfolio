import React from 'react'
import './Card.css'
const Card = (props) => {
    console.log(props)
    return (
        <div className='cardContainer'>
            <img src={props.project.img} alt='image'/>
            <h2>{props.project.title}</h2>
            <p>{props.project.description}</p>
            <p>Take me there:<a href={props.project.url}>{props.project.title}</a></p>
        </div>
    )
}

export default Card
