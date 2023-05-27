'use client';

import React, { useEffect, useRef, useState } from 'react';
import logo from '../../../public/logo.png';
import whitelogo from '../../../public/logo_white_yellow.png';
import Image from 'next/image';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const NavlinkArr = ['Home', 'About', 'Services', 'Contacts'];
  const navContainerRef= useRef<any>(null);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div ref={navContainerRef} className={`${styles.nav_container} ${scroll ? styles.nav_active : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoWrapper}>
          <Image
            className={styles.logoImage}
            priority
            src={scroll ? whitelogo : logo}
            alt="logo"
            />
          <p className={styles.name}>PROMOVIZE</p>
            </div>
        </div>

        <ul className={styles.navlinks}>
          {NavlinkArr.map((link) => {
            return (
              <Link href="#" className={styles.navlink} key={link}>
                {link}
              </Link>
            );
          })}
        </ul>
        <button type='button' title='menu' className={styles.menu}>
          <AiOutlineMenu className={styles.menu_icon} />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
