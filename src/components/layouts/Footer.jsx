import React from 'react';
import style from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.left}>
        <p>TEL. 010-3599-9573 | 010-4035-9573</p>
        <p>INFO. 대표 강은아 | 사업자등록번호 607-37-38583</p>
        <p>ADDRESS. 경상북도 경주시 천북면 서낭길 32</p>
        <p>BANK. 농협은행 717102-52-107992(강은아)</p>
      </div>
      <div className={style.right}>
        <p>개인정보처리방침 관리자</p>
        <p>COPYRIGHT</p>
        <p>©YOLO PENSION & COFFEE</p>
        <p>lee.sel</p>
      </div>
    </div>
  );
}
