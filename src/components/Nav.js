import React, { useState, useEffect } from 'react';
import Button from './Button';

import {
  nav,
  nav__brand,
  nav__list,
  nav__item,
  nav__icon,
  nav__listVisible,
  nav__fixed,
} from './Nav.module.scss';


const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        if (offset > 50) setScrolled(true);
        else setScrolled(false);
      });
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [scrolled]);
  return (
    <nav className={`${nav} navbar sticky ${scrolled ? nav__fixed : ''} `}>
      <div className={nav__brand}>
        <a href="#home">All The Rage</a>
      </div>
      <ul className={`${nav__list} ${isVisible ? nav__listVisible : ''}`}>
        <li className={nav__item}>
          <a href="#home">home</a>
        </li>
        <li className={nav__item}>
          <a href="#services">services</a>
        </li>
        <li className={nav__item}>
          <a href="#features">features</a>
        </li>
        <li className={nav__item}>
          <a href="#pricing">pricing</a>
        </li>
        <li className={nav__item}>
          <a href="#contact">contact</a>
        </li>

        <li className={nav__item}>

          <Button isCurved>Login</Button>

        </li>
      </ul>
    </nav>
  );
};

export default Nav;
