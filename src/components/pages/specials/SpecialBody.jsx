import React, { memo, useMemo } from 'react';
import style from '../../styles/SpecialBody.module.css';
import { specialItems } from './SpecialImg';

const SpecialItem = memo(({ item }) => (
  <div className={style.item}>
    <img src={`${process.env.PUBLIC_URL}${item.src}`} alt={item.alt} className={style.image} />
    <div className={style.textOverlay}>
      <div className={style.overlayTitle}>{item.title}</div>
      <div className={style.overlayDescription}>{item.description}</div>
    </div>
  </div>
));

function SpecialBody() {
  const items = useMemo(() => specialItems, []);

  return (
    <div className={style.body}>
      {items.map((item, index) => (
        <SpecialItem key={index} item={item} />
      ))}
    </div>
  );
}

export default SpecialBody;
