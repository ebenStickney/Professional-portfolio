import React from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ( {startLogout} ) => (
  <header className='header'>
    <div className='content-container__header'>
      <div className='header__content'>
      <Link className='header__title' to="/">
        <img className="header__logo" src="/images/logo-150.png" />
      </Link>
        <Link className='header__title' to="/about">
          <h4>About</h4>
        </Link>
        <Link className='header__title' to="/projects">
          <h4>Projects</h4>
        </Link>
        <Link className='header__title' to="/contact">
          <h4>Contact</h4>
        </Link>

      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
