import React from 'react';
import styles from '../resources/styles/Header.module.css';
import logo from '../resources/img/logo.svg.png';
import main from '../resources/img/splash.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {

  const history = useNavigate();

  function handleClick() {
    history('/dashboard');
  }

  return (
    <header className={`${styles['header']}`}>
      <nav className={`${styles['header-nav']} ${styles.container} ${styles['flex-container']}`}>
        <img src={logo} alt="Digicel logo" className={`${styles.logo} ${styles['img']}`} />
        {/* <h1 className={styles.logo}><a className={styles['logo-link']} href="https://">Digicel</a></h1> */}
        <ul className={`${styles['header-menu']} ${styles['flex-container']}`}>
          {/* <li><a className={styles['header-menu-link']} href="https://">Books</a></li>
          <li><a className={styles['header-menu-link']} href="https://">Courses</a></li>
          <li><a className={styles['header-menu-link']} href="https://">Webinars</a></li>
          <li><a className={styles['header-menu-link']} href="https://">Blog</a></li> */}
        </ul>
        <button className={`${styles['ghost-button']} ${styles['button']}`} onClick={handleClick}>Log In</button>
      </nav>
      <section className={styles['header-content']}>
        <figure className={styles['header-img']}>
          <img src={main} alt="dfdfdfd" className={`${styles['img']}`}></img>
        </figure>
        <div className={`${styles['header-description']} ${styles.container}`}>
          <h2 className={styles['header-title']}>Discover. <h2 className={styles.learn}>Learn.</h2> Share.</h2>
          <p>Effortlessly navigate through company-wide information with our centralized knowledge management solution - your one-stop-shop for internal knowledge.</p>
          <button className={`${styles['type-button']} ${styles['button']}`}>Start Learning</button>
        </div>    
      </section>
    </header>
  );
}

export default Header;