'use client';

import React, { useEffect, useState } from 'react';
import logo from '../../../public/logo.png';
import whitelogo from '../../../public/logo_white_yellow.png';
import Image from 'next/image';
import styles from './navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  const NavlinkArr = ['Home', 'About', 'Services', 'Contacts'];

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
    <div className={scroll ? styles.nav_active : styles.nav_container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            className="logo"
            width="50"
            priority
            src={scroll ? whitelogo : logo}
            alt="logo"
          />
          <p className={styles.name}>PROMOVIZE</p>
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
      </nav>
    </div>
  );
};

export default Navbar;
