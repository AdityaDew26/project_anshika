import React from 'react'

import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">MediConnect</div>
      <div className="nav-links">
        <ul>
            <li><button>Login</button></li>
            <li><button>SignUp</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
