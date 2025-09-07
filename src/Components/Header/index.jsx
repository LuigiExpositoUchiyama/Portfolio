import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../Button';

import '../../App.module.css';
import styles from './Header.module.css';
import menu from './MenuMobile.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <header className={`container ${styles.bgHeader}`}>
        <NavLink to="/" aria-label="Logo Luigi">
          <img src="/logo.svg" alt="Logo Luigi" />
        </NavLink>
        <div className={menu.hamburger} onClick={toggleMenu}>
          <div className={menu.menuMobile}>
            <div className={menu.textMenu}>
              <p>Menu</p>
            </div>
            <div className={menu.menuHamburguer}>
              <div
                className={`${menu.menuHamburguerFechado} ${
                  showMenu ? menu.menuHamburguerAberto : ''
                }`}
              ></div>
            </div>
          </div>
        </div>
        <nav
          className={`${menu.menuFechado} ${showMenu ? menu.menuAberto : ''}`}
        >
          <ul className={styles.header} id="menu" role="menu">
            <li className={styles.menuItem}>
              <a href="/#about" onClick={closeMenu}>
                Sobre mim
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="/#service" onClick={closeMenu}>
                Serviços
              </a>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/projects"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                Projetos
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <a href="/#reviews" onClick={closeMenu}>
                Avaliações
              </a>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
