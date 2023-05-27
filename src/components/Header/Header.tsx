'use client';

import styles from './header.module.css';
import { BsApple } from 'react-icons/bs';
import { SiGoogleplay } from 'react-icons/si';
import localFont from 'next/font/local';

const myfonts = localFont({
  src: '../../app/fonts/fonts/SF-Pro-Rounded-Light.otf',
  display: 'swap',
});

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.description}>
        <h1 className={myfonts.className}>Discover the power of smile</h1>
        <p>
          Zero code, maximum speed. Make professional sites easy, fast and fun
          <br />
          while delivering best-in-class SEO, performance.
        </p>
      </div>
      <div className={styles.btns}>
        <button type="button" className={styles.btn}>
          <BsApple
            style={{ fontSize: '1.5rem', color: 'white', background: 'black' }}
          />
          <p>App Store</p>
        </button>
        <button type="button" className={styles.btn}>
          <SiGoogleplay
            style={{ fontSize: '1.5rem', color: 'white', background: 'black' }}
          />
          <p>Google Play</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
