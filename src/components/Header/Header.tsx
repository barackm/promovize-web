'use client';

import styles from './header.module.scss';
import Image from 'next/image';
import { BsApple } from 'react-icons/bs';
import { SiGoogleplay } from 'react-icons/si';
import localFont from 'next/font/local';
import phone from '../../../public/image.png';

const myfonts = localFont({
  src: '../../app/fonts/fonts/SF-Pro-Rounded-Light.otf',
  display: 'swap',
});

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.description}>
        <h1 className={myfonts.className}>
          Transform your social media game <br /> and engage your audience.
        </h1>
        <p>
          Elevate your online presence with Promovize! <br /> Sign up now and
          take control of your company’s social media game.
        </p>
      </div>
      <div className={styles.btns}>
        <button type="button" className={styles.btn}>
          <BsApple style={{ fontSize: '1.5rem', color: 'white' }} />
          <p>App Store</p>
        </button>
        <button type="button" className={styles.btn}>
          <SiGoogleplay style={{ fontSize: '1.5rem', color: 'white' }} />
          <p>Google Play</p>
        </button>
      </div>
      <Image alt="product" width="500" height="600" src={phone} />
    </div>
  );
};

export default Header;
