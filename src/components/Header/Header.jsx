import React from 'react'
import logo from '../../components/img/logo.png'
function Header() {
  return (
    <div>
        <div className="header">
                <a href="/" className="logo">
                 <img src={logo} alt=""  className='logo'/>
                </a>
             <ul className="list">
                <li className="item">
                    <a href="/Home" className="link">
                      Home
                    </a>
                </li>
                <li className="item">
                    <a href="/About" className="link">
                    About
                    </a>
                </li>
                <li className="item">
                    <a href="/Card" className="link">
                    Card
                    </a>
                </li>
             </ul>
        </div>
    </div>
  )
}

export default Header