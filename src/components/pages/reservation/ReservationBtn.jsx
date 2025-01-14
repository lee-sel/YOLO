// src/components/ReservationBtn.js

import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/ReservationBtn.module.css';

function ReservationBtn() {
  return (
    <div className={style.reservationBtn01}>
      <Link to="/reservation" className={style.reservationBtn}>
        실시간 예약
      </Link>
    </div>
  );
}

export default ReservationBtn;
