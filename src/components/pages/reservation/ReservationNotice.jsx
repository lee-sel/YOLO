import React, { useState } from 'react';
import style from '../../styles/ReservationNotice.module.css';

function ReservationNotice() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={style.ReservationNotice01}>
      <button className={style.toggleButton} onClick={toggle}>
        예약 공지 보기
        <span className={`${style.arrow} ${isOpen ? style.arrowOpen : ''}`}>▶</span>
      </button>

      {isOpen && (
        <div className={style.noticeContent}>
          <button className={style.closeButton} onClick={toggle}>x</button>
          <p>❤️ 예약 인원에서  <span className={style.highlight}>인원이 추가</span>되는 경우 펜션에 미리 연락을 주시기 바랍니다.</p>
          <p>🧡 최대 인원 초과 시 입실이 불가능할 수 있으며, 해당 사유로 환불 받을 수 없습니다.</p>
          <p>💛 반려동물 동반 시 입실이 거부될 수 있으며, 해당 사유로 환불 받을 수 없습니다.</p>
          <p>💚 <span className={style.highlight}>미성년자는 혼숙이 불가능</span>하며, 동성일 경우 <span className={style.highlight}>보호자 동반이나 동의</span>가 있을 경우에만 입실이 가능합니다.</p>
          <p>🩵 다음 이용 고객을 위해 입실, 퇴실 시간을 준수해 주시기 바랍니다. </p>
          <p>💙 객실 및 주변시설 이용 시 시설물의 훼손, 분실에 대한 책임은 투숙객에게 있으며, 손해배상의 책임을 질 수 있습니다. </p>
          <p>💜 객실 내에서의 <span className={style.highlight}>흡연은 금지</span>되어 있으며, 지정된 장소를 이용해 주시기 바랍니다.</p>
          <p>🩷 다른 이용객에게 피해를 줄 수 있는 무분별한 <span className={style.highlight}>오락, 음주, 고성방가는 삼가</span>주시기 바랍니다.</p>
        </div>
      )}
    </div>
  );
}

export default ReservationNotice;
