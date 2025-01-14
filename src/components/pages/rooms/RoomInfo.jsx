import React from 'react';
import styles from '../../styles/RoomInfo.module.css';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>안내 및 편의시설 소개</p>
      <p className={styles.paragraph}>&nbsp;&nbsp;[추가인원]</p>
      <p className={styles.paragraph}>· 1인 당 성인 10,000원(아동 : 10,000원 (24개월 무료)) <span className={styles.highlight}>**현장결제</span></p>
      <p className={styles.paragraph}>· 추가 인원 요금은 경주 지역에서 최저가로 운영되고 있습니다.</p>
      <p className={styles.paragraph}>&nbsp;&nbsp;[개별바비큐]</p>
      <p className={styles.paragraph}>· 숯+그릴 비용 : 2인 기준 10,000원 / 인원 추가시 1인당 5,000원 <span className={styles.highlight}>**현장결제</span></p>
      <p className={styles.paragraph}>IPTV/WiFi</p>
      <p className={styles.paragraph}>&nbsp;&nbsp;[수영장]</p>
      <p className={styles.paragraph}>· 욜로펜션의 객실 바로 앞에 마련된 근사한 야외수영장에서 시원한 여름휴가를 즐겨주세요! 욜로펜션 투숙객은 무료로 수영장을 이용하실 수 있습니다. <span className={styles.highlight}>(단, 수영장은 하절기에만 개방합니다)</span></p>
      <p className={styles.paragraph}>&nbsp;&nbsp;[카페]</p>
      <p className={styles.paragraph}>· 욜로펜션 투숙객은 무료로 욜로커피숍의 커피(아메리카노 HOT/COLD)를 드립니다. 욜로커피숍의 커피는 100% 아라비카 원두로 제공하고 있습니다. <span className={styles.highlight}>(오전 9~10시에 욜로커피숍으로 오시면 되세요~)</span></p>
      <p className={styles.paragraph}>· 펜션 투숙객은 음료 <span className={styles.highlight}>30% 할인</span> 혜택이 있습니다</p>

      <p className={styles.paragraph}>&nbsp;&nbsp;[조식서비스]</p>
      <p className={styles.paragraph}>· 욜로 커피숍에서 모닝커피와 함께 무료 조식(토스트 등)을 제공합니다*^^* 든든하게 아침식사하시고 신나는 경주여행을 시작해보세요!</p>

      <p className={styles.header}>YOLO 이용 안내</p>
      <p className={styles.paragraph}>· 22시 이후의 입실은 사전에 반드시 연락을 주시기 바랍니다.</p>
      <p className={styles.paragraph}>· 반려동물과 객실에 입실하실 수 없습니다.</p>
      <p className={styles.paragraph}>· 욜로 건물내 전체 금연구역입니다.</p>
      <p className={styles.paragraph}>· 투숙객님의 안전을 위한 CCTV가 작동 중입니다.</p>
      <p className={styles.paragraph}>· 시설물 이용에 따른 안전사고에 주의 바랍니다.</p>
      <p className={styles.paragraph}>· 최상의 객실 컨디션을 위해 충분한 청소, 정리 시간이 필요합니다. 다음 고객을 위해 퇴실 시간은 반드시 지켜주세요.</p>
      <p className={styles.paragraph}>· 퇴실 전 쓰레기는 종류별로 분리 배출 해주시면 감사합니다.</p>
    </div>
  );
};

export default MyComponent;
