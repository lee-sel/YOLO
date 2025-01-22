import React, { useState, useEffect } from 'react';
import style from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [btnOpen, setBtnOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoverText, setHoverText] = useState({
    special: 'SPECIAL',
    rooms: 'ROOMS',
    location: 'LOCATION',
    reservation: 'RESERVATION',
  });

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateIsMobile(); // Initial check
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const clickBtn = () => {
    setBtnOpen(!btnOpen);
  };

  const handleMouseEnter = (section) => {
    if (!isMobile) {
      const translations = {
        special: '부대시설 & 서비스',
        rooms: '객실',
        location: '오시는 길',
        reservation: '실시간예약',
      };
      setHoverText((prevText) => ({ ...prevText, [section]: translations[section] }));
    }
  };

  const handleMouseLeave = (section) => {
    if (!isMobile) {
      const originalTexts = {
        special: 'SPECIAL',
        rooms: 'ROOMS',
        location: 'LOCATION',
        reservation: 'RESERVATION',
      };
      setHoverText((prevText) => ({ ...prevText, [section]: originalTexts[section] }));
    }
  };

  return (
    <div className={style.header01}>
      <Link to={'/'}>
        <img className={style.logo} src={`${process.env.PUBLIC_URL}/yolologo.png`} alt="YOLO" />
      </Link>
      <button className={style.hamburgerBtn} onClick={clickBtn}>
        ☰
      </button>
      <div className={`${style.navbar} ${btnOpen ? style.navOpen : ''}`}>
        <ul>
          <li>
            <Link
              to="/special"
              onMouseEnter={() => handleMouseEnter('special')}
              onMouseLeave={() => handleMouseLeave('special')}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              {isMobile ? '부대시설 & 서비스' : hoverText.special}
            </Link>
          </li>
          <li>
            <Link
              to="/room"
              onMouseEnter={() => handleMouseEnter('rooms')}
              onMouseLeave={() => handleMouseLeave('rooms')}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              {isMobile ? '객실' : hoverText.rooms}
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              onMouseEnter={() => handleMouseEnter('location')}
              onMouseLeave={() => handleMouseLeave('location')}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              {isMobile ? '오시는 길' : hoverText.location}
            </Link>
          </li>
          <li
            className={style.reservationBtn}
            onMouseEnter={() => handleMouseEnter('reservation')}
            onMouseLeave={() => handleMouseLeave('reservation')}
          >
            <Link to="/reservation">
              {isMobile ? '실시간예약' : hoverText.reservation}
            </Link>
          </li>
        </ul>

      </div>
    </div>
  );
}
