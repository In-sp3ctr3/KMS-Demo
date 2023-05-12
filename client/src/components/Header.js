import React from 'react';
import '../resources/styles/Header.css';
import logo from '../resources/img/logo.svg.png';
import main from '../resources/img/splash.jpg';

function Header() {
  return (
    <header>
      <nav className="header-nav container flex-container">
      <img src={logo} alt="Digicel logo" className="logo" />
        {/* <h1 className="logo"><a className="logo-link" href="https://">Digicel</a></h1> */}
        <ul className="header-menu flex-container">
          {/* <li><a className="header-menu-link" href="https://">Books</a></li>
          <li><a className="header-menu-link" href="https://">Courses</a></li>
          <li><a className="header-menu-link" href="https://">Webinars</a></li>
          <li><a className="header-menu-link" href="https://">Blog</a></li> */}
        </ul>
        <button className="ghost-button">Log In</button>
      </nav>
      <section className="header-content">
        <figure className="header-img">
          <img src={main} alt="dfdfdfd"></img>
        </figure>
        <div className="header-description container">
          <h2 className="header-title">Discover. <h2 className="learn">Learn.</h2> Share.</h2>
          <p>Effortlessly navigate through company-wide information with our centralized knowledge management solution - your one-stop-shop for internal knowledge.</p>
          <button className="type-button">Start Learning</button>
        </div>    
      </section>
    </header>
  );
}

export default Header;