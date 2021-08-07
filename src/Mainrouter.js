import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from './Components/Contact/index.js'
import Developing from './Components/Developing/index.js'
import Home from './Components/Home.js'
import Projects from './Components/Projects/index.js'
import Sidebar from './Components/Sidebar'
import './index.css'
const Mainrouter = () => {
    return (
        <div className="projectContainer">
            <BrowserRouter>
                <div >
                    <Sidebar />
                </div>
                <div className='Mainbody'>
                    <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/projects' component={Projects}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='*' exact component={Developing}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Mainrouter
