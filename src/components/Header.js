import React from 'react';
import { Link  } from 'react-router-dom';


export const Header = ( ) => (
  <header className='header'>
    <div className='content-container__header'>
      <ul className='header__content'>
      <li className='header__title'>
        <img className="header__logo" src="/images/logo-150.png" />
      </li>
        <li className= "main-title"> Jib Developers </li>
        <li className='header__link'>
          <h4>About</h4>
        </li>
        <li className='header__link'>
          <h4>Projects</h4>
        </li>
        <li className='header__link'>
          <h4>Contact</h4>
        </li>

      </ul>
    </div>
  </header>
)
