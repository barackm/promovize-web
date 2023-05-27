import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import styles from './footer.module.scss';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className="logo">
          <Image width="50" priority src={logo} alt="logo" />
          <p className="name">PROMOVIZE</p>
        </div>
        <div className={styles.footer_description}>
          <ul className={styles.social_media}>
            <li>
              <a href="#">
                <FiTwitter className={styles.social_icon} />
              </a>
            </li>

            <li>
              <a href="#">
                <FiLinkedin className={styles.social_icon} />
              </a>
            </li>

            <li>
              <a href="#">
                <FiInstagram className={styles.social_icon} />
              </a>
            </li>
          </ul>

          <form className={styles.form}>
            <label>
              <input
                className={styles.email_input}
                type="email"
                required
                placeholder="Email Address"
              />
            </label>
            <button type="submit" className={styles.submit_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
