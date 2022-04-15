import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        {/* ------- Header Logo Or Title ------ */}
        <div className="header-logo">
            <h2>Recipe <span>App</span> 😋</h2>
        </div>

        {/* ------- Header Links ------ */}
        <ul className="header-links">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Foods</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>

        {/* ------- Header Register Button ------ */}
        <Link to="/" className="btn-primary">Register</Link>
    </header>
  )
}

export default Header;