import React from 'react';
import { Link  } from 'react-router-dom';


export const Header = ( ) => (
  <header className='header'>
    <div className='content-container__header'>
      <ul className='header__content'>
      <li className='header__title'>
        <a href="#welcome">
         <img className="header__logo" src="/images/logo-150.png" />
        </a>
      </li>
        <li className='header__link'>
          <a href="#about">
            <h4>About</h4>
          </a>

        </li>
        <li className='header__link'>
          <a href="#projects">
            <h4>Projects</h4>
          </a>
        </li>
        <li className='header__link'>
          <a href="#contact">
            <h4>Contact</h4>
          </a>
        </li>

      </ul>
    </div>
  </header>
)
