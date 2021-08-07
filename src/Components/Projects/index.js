import './Projects.css'

import React from 'react'
import Card from './Card'
import {freeLancing, professional} from './Contanst'
const Projects = (props) => {
    return (
        <div className='projectsContainer'>
            <div>
                <h3>Professional level</h3>
                <hr />
               <div className='cards'>
               {
                    professional.map(project=><Card project={project}/>)
                }
               </div>
            </div>
            <div>
                <h3>Freelancing level</h3>
                <hr />
               <div className='cards'>
               {
                    freeLancing.map(project=><Card project={project}/>)
                }
               </div>
            </div>
        </div>
    )
}

export default Projects
