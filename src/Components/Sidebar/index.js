import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = (props) => {
  const [path, setpath] = useState('')
  useEffect(()=>
  {
    setpath(props.location.pathname)
  })
  return (
    <div className='sidebarContainer'>
      <ul>
        <li ><Link to='/' className={path=='/'?"Pathactive":""} style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
        <li  ><Link to='/projects' className={path=='/projects'?"Pathactive":""} style={{ textDecoration: "none", color: "black" }}>Projects</Link></li>
        <li  ><Link to='/contact' className={path=='/contact'?"Pathactive":""} style={{ textDecoration: "none", color: "black" }}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default withRouter(Sidebar)
