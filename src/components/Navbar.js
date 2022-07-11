import './Navbar.css';
import React, { useState } from 'react';

import { Button } from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import logomark from '../images/logomark.svg';

const Navbar = ({ text }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav>
      <div className='desktop-items'>
        <p>HOME</p>
        <p>CONTACT</p>
      </div>

      <div className='logo'>
        <img src={logomark} alt='logo' />
        <h1>HomeSmart</h1>
      </div>

      <div className='desktop-btns'>
        <div className='desktop-btn1'>
          <Button text={'LOGIN'} />
        </div>
        <div className='desktop-btn2'>
          <Button text={'SIGN UP'} />
        </div>
      </div>

      <div className='mobile-menu'>
        <GiHamburgerMenu size={35} onClick={() => setMobileNavOpen(true)} />
      </div>

      {mobileNavOpen && (
        <ul className='mobile-nav'>
          <div className='close'>
            <AiOutlineClose size={40} onClick={() => setMobileNavOpen(false)} />
          </div>
          <li>HOME</li>
          <li>CONTACT</li>
          <div className='sign-in'>
            <Button text={'LOGIN'} />
          </div>
          <div className='sign-up'>
            <Button text={'SIGN UP'} />
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
