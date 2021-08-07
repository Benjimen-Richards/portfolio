import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className='profileImgContainer'>
            <div className='profileText'>
                <span><strong style={{color:"black"}}>Alfred Richards </strong>is a Front-end Developer with full stack experience in Mern</span>
            </div>
           <div className='profileImg'>
           <img src='./profileImg.jpg' />
           </div>
        </div>
    )
}

export default Home
