import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from '../../styles/RoomDetail.module.css';
import Blank from '../Blank';
import RoomInfo from './RoomInfo';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const rooms = [
  {
    room_number: 201,
    name: 'YOU',
    headcount: '기준 2인 / 최대 4인',
    room_type: '복층',
    room_condition: '침대(퀸2)+화장실+테라스',
    info: 'TV/와이파이, 테라스 바베큐 가능',
    etc: '다른 방과 떨어져 있어서 프라이빗해요',
    images: [
      { id: 1, url: `${process.env.PUBLIC_URL}/yoloView/201/1.webp` },
      { id: 2, url: `${process.env.PUBLIC_URL}/yoloView/201/2.webp` },
      { id: 3, url: `${process.env.PUBLIC_URL}/yoloView/201/3.webp` },
      { id: 4, url: `${process.env.PUBLIC_URL}/yoloView/201/4.webp` },
      { id: 5, url: `${process.env.PUBLIC_URL}/yoloView/201/5.webp` },
      { id: 6, url: `${process.env.PUBLIC_URL}/yoloView/duplex/2011.webp` },
      { id: 7, url: `${process.env.PUBLIC_URL}/yoloView/duplex/2012.webp` }
    ]
  },
  {
    room_number: 202,
    name: 'ONLY',
    headcount: '기준 2인 / 최대 4인',
    room_type: '복층',
    room_condition: '침대(퀸2)+화장실+테라스',
    info: 'TV/와이파이, 테라스 바베큐 가능',
    etc: '현재 202호는 미운영 중입니다, 방 전체를 빌리실 투숙객은 010-3599-9573으로 연락 주시기 바랍니다.',
    images: [
      { id: 1, url: `${process.env.PUBLIC_URL}/yoloView/202/1.webp` },
      { id: 2, url: `${process.env.PUBLIC_URL}/yoloView/202/2.webp` },
      { id: 3, url: `${process.env.PUBLIC_URL}/yoloView/202/3.webp` },
      { id: 4, url: `${process.env.PUBLIC_URL}/yoloView/202/4.webp` },
      { id: 5, url: `${process.env.PUBLIC_URL}/yoloView/202/5.webp` },
      { id: 6, url: `${process.env.PUBLIC_URL}/yoloView/duplex/2021.webp` },
      { id: 7, url: `${process.env.PUBLIC_URL}/yoloView/duplex/2022.webp` }
    ]
  },
  {
    room_number: 203,
    name: 'LIVE',
    headcount: '기준 2인 / 최대 4인',
    room_type: '복층',
    room_condition: '침대(퀸)+화장실+테라스',
    info: 'TV/와이파이, 테라스 바베큐 가능',
    etc: '방이 넓어 시원시원해요',
    images: [
      { id: 1, url: `${process.env.PUBLIC_URL}/yoloView/203/1.webp` },
      { id: 2, url: `${process.env.PUBLIC_URL}/yoloView/203/2.webp` },
      { id: 3, url: `${process.env.PUBLIC_URL}/yoloView/203/3.webp` },
      { id: 4, url: `${process.env.PUBLIC_URL}/yoloView/203/4.webp` },
      { id: 5, url: `${process.env.PUBLIC_URL}/yoloView/203/5.webp` },
      { id: 6, url: `${process.env.PUBLIC_URL}/yoloView/duplex/2031.webp` },
      // { id: 7, url: `${process.env.PUBLIC_URL}/yoloView/duplex/2032.webp` }
    ]
  },
  {
    room_number: 101,
    name: 'ONCE',
    headcount: '기준 4인 / 최대 8인',
    room_type: '단체(온돌방)',
    room_condition: '거실+방(2)+화장실(2)+데크',
    info: 'TV/와이파이, 데크 바베큐 가능',
    etc: '수영장이 앞에 있어 놀기 좋습니다.',
    images: [
      { id: 1, url: `${process.env.PUBLIC_URL}/yoloView/101/1.webp` },
      { id: 2, url: `${process.env.PUBLIC_URL}/yoloView/101/2.webp` },
      { id: 3, url: `${process.env.PUBLIC_URL}/yoloView/101/3.webp` },
      { id: 4, url: `${process.env.PUBLIC_URL}/yoloView/101/4.webp` },
      { id: 5, url: `${process.env.PUBLIC_URL}/yoloView/101/5.webp` },
    ]
  },
];

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'grey', padding: '10px' }}
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'grey', padding: '10px' }}
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );
};


function RoomDetail() {
  const { roomNumber } = useParams();
  const roomDetail = rooms.find(room => room.room_number === parseInt(roomNumber));

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  useEffect(() => {
    window.scrollTo(0, 0); //스크롤해도 좌표 0, 0으로
  }, []);

  return (
    <>
      <Blank />
      <div className={style.roomDetail01}>
        <div className={style.roomHeader}>
          <h1>{roomDetail.name}</h1>
          <p>{roomDetail.room_number}호</p>
        </div>
        <div className={style.roomContainer}>
          <div className={style.imgSlider}>
            <Slider {...sliderSettings}
              prevArrow={<div style={{ color: 'grey', borderRadius: '50%', padding: '10px' }}></div>}
              nextArrow={<div style={{ color: 'grey', borderRadius: '50%' }}></div>}>
              {roomDetail.images.map((img) => (
                <div key={img.id}>
                  <img
                    src={img.url}
                    alt={`Gyeongju YOLO PENSION ROOM${img.id}`}
                    className={style.detailImage}
                  />
                </div>
              ))}

            </Slider>
          </div>
          <div className={style.textContent}>
            <p>객실 안내</p>
            <p>이용인원: {roomDetail.headcount}</p>
            <p>객실타입: {roomDetail.room_type}</p>
            <p>객실구조: {roomDetail.room_condition}</p>
            <p>객실시설: {roomDetail.info}</p>
            <p>특이사항: {roomDetail.etc}</p>
          </div>
        </div>
      </div>
      <Blank />
      <RoomInfo />
    </>
  );
}

export default RoomDetail;
