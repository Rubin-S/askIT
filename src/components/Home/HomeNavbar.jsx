import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';
import './styles/HomeNavbar.css';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);


    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">Ask IT</a>
      <ul className='menu'>
        <li><Link to='#'>Support</Link></li>
        <li><Link to='#'>Notification</Link></li>
        <li><Link to='#'>English</Link></li>
        <li><Link to='#'>Sign in</Link></li>
        <button><Link to='#'>Sign up</Link></button>
      </ul>
    </nav>
  );
};

export default Navbar;
