'use client';

import React, { useEffect, useState } from 'react';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const NavlinkArr = ['Home', 'About', 'Services', 'Contacts'];

  return (
    <div className={styles.nav_container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image className="logo" width="50" priority src={logo} alt="logo" />
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
