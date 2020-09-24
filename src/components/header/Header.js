import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import logo from '../../assets/logo.svg';


const Header = ({ navList }) => {
  return (
    <>
      <div className='Header'>
        <div className='Header-Logo-Container'>
          <img 
            className='Header-Logo'
            src={logo} 
            alt='logo' 
          />
          <span>Shoply</span>
        </div>
        <ul className='Header-List'>
          {navList.map(route => (
            <li
              className='Header-List-Item'
              key={route.id}
            >
              <NavLink 
                className="Header-List-Link"
                to={route.path}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;