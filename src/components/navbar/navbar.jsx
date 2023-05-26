import React from 'react';
import logo from '../../../public/assets/images/logo.png';
// import whiteLogo from '../../../public/logo_white_yellow.png';

import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const NavlinkArr = ['Home', 'About', 'Services', 'Contacts'];
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logo_image}>
            <Image className="logo" src={logo} alt="logo" />
          </div>
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
