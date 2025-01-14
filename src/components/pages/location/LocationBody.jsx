import React from 'react';
import style from '../../styles/LocationBody.module.css';

function LocationBody() {
  return (
    <div className={style.subway}>
      <p>주소. 경상북도 경주시 천북면 서낭길 32</p>
      <p>진입 시. 한화 리조트 보문CC에서 내려오시고 보이는 첫번째 건물입니다.</p>
    </div>
  );
}

export default LocationBody;
