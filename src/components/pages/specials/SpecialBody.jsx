import React from 'react';
import style from '../../styles/SpecialBody.module.css';

function SpecialBody() {
  const items = [
    { src: `${process.env.PUBLIC_URL}/yoloView/special/droncp.webp`, alt: '경주 주차장 넓은 펜션', title: '주차', description: '주차장이 넓어 넉넉하게 주차 가능합니다.' },
    { src: `${process.env.PUBLIC_URL}/yoloView/special/coffee.webp`, alt: '아이스 아메리카노 제공', title: '아메리카노', description: '아메리카노를 한잔 제공합니다. (조식에 포함)' },
    { src: `${process.env.PUBLIC_URL}/yoloView/special/salt.webp`, alt: '기본 양념을 제공해드립니다', title: '양념', description: '소금, 설탕, 후추 등 기본 양념을 제공합니다.' },
    { src: `${process.env.PUBLIC_URL}/yoloView/special/bread.webp`, alt: '경주에서 든든한 여행을 할 수 있게 조식 토스트를 제공해드립니다.', title: '조식 토스트', description: '조식 토스트를 제공합니다. (AM 09:00-10:00)' },
    { src: `${process.env.PUBLIC_URL}/yoloView/special/barbecue.webp`, alt: '데크나 테라스에서 개별 바베큐를 즐기실 수 있습니다.', title: '개별 바베큐', description: '객실 테라스에서 바베큐 시설을 제공합니다.' },
    { src: `${process.env.PUBLIC_URL}/yoloView/special/11.webp`, alt: '경주 욜로 펜션 수영장에서 더위를 날려보세요', title: '수영장', description: '무더운 여름엔 수영장을 이용하실 수 있습니다. ' },
    { src: `${process.env.PUBLIC_URL}/yoloView/4.webp`, alt: '카페와 펜션을 함께 운영하고 있어 언제나 카페인 충전이 가능합니다', title: '카페', description: '카페에서 음료를 드실 수 있습니다. (투숙객 30%할인)' },
    { src: `${process.env.PUBLIC_URL}/yoloView/special/tv.webp`, alt: '펜션 내 TV와 WIFI가 제공됩니다', title: 'TV/WIFI', description: 'TV와 WIFI를 이용하실 수 있습니다.' }
  ];

  return (
    <>
      <div className={style.gridContainer}>
        {items.map((item, index) => (
          <div key={index} className={style.item}>
            <img src={item.src} alt={item.alt} className={style.image} />
            <div className={style.textOverlay}>
              <div className={style.overlayTitle}>{item.title}</div>
              <div className={style.overlayDescription}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpecialBody;
