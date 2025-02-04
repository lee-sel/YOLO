import React, { useState, useEffect } from 'react';
import style from '../../styles/RoomsBody.module.css';
import { Link } from 'react-router-dom';

function RoomsBody() {

  const rooms = [
    {
      id: 1,
      name: 'YOU',
      room_number: 201,
      headcount: '기준 2인 / 최대 4인',
      room_type: '복층',
      main_img: `${process.env.PUBLIC_URL}/yoloView/201/2.webp`
    },
    {
      id: 2,
      name: 'ONLY',
      room_number: 202,
      headcount: '기준 2인 / 최대 4인',
      room_type: '복층',
      main_img: `${process.env.PUBLIC_URL}/yoloView/202/1.webp`
    },
    {
      id: 3,
      name: 'LIVE',
      room_number: 203,
      headcount: '기준 2인 / 최대 4인',
      room_type: '복층',
      main_img: `${process.env.PUBLIC_URL}/yoloView/203/1.webp`
    },
    {
      id: 4,
      name: 'ONCE',
      room_number: 101,
      headcount: '기준 4인 / 최대 8인',
      room_type: '단체(온돌방), 거실, 방(2)',
      main_img: `${process.env.PUBLIC_URL}/yoloView/101/1.webp`
    }
  ];

  return (
    <div>
      <div className={style.RoomsHeading01}>
        <h4 className={style.heading}>'You Only Live Once'</h4>
        <h4 className={style.subheading}>당신의 인생은 한번 뿐입니다.</h4>
      </div>
      <ul className={style.roomsList}>
        {rooms.map((room, index) => (
          <li
            key={room.id}
            className={`${style.roomItem} ${index % 2 === 0 ? style.even : style.odd}`}
          >
            {index % 2 === 0 ? (
              <div className={style.roomsBody01}>
                <div className={style.roomInfo}>
                  <div className={style.roomLogo}>YOLO pension & coffee</div>
                  <h2>{room.name}
                    <p className={style.roomNameLine}></p>
                  </h2>
                  <p>{room.room_number}호</p>
                  <p>인원: {room.headcount}</p>
                  <p>{room.room_type}</p>

                  <Link to={`/details/${room.room_number}`} className={style.detailsButton}>+ DETAIL</Link>

                </div>
                <img
                  src={room.main_img}
                  alt={`경주 펜션${room.name}`}
                  className={`${style.roomImg} ${style.evenImg}`}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className={style.roomsBody01}>
                <img
                  src={room.main_img}
                  alt={room.name}
                  className={style.roomImg}
                  loading="lazy"
                />
                <div className={style.roomInfo}>
                  <div className={style.roomLogo}>YOLO pension & coffee</div>
                  <h2>{room.name}
                    <p className={style.roomNameLine}></p>
                  </h2>
                  <p>{room.room_number}호</p>
                  <p>인원: {room.headcount}</p>
                  <p>{room.room_type}</p>

                  <Link to={`/details/${room.room_number}`} className={style.detailsButton}>
                    + DETAIL
                  </Link>

                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomsBody;
