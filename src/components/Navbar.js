import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.Title}</Link>
        {/* <a className="navbar-brand" href="#">{props.Title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">{props.Home}</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{props.About}</Link>
            </li>
            
          </ul>
         
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light '}`} >
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes={Title: PropTypes.string.isRequired,
//                   Home: PropTypes.string.isRequired,
//                   About: PropTypes.string.isRequired,  
//                     }

// Navbar.defaultProps={Title: 'Set Title here',
//                     Home: 'set home here',
//                     About: 'Set about here',

// }
