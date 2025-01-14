import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RoomsBody from '../pages/rooms/RoomsBody';
import MainYOLO from '../pages/MainYOLO';
import Blank from '../pages/Blank';
import Maindes from '../pages/etcs/Maindes';
import ReservationBtn from '../pages/reservation/ReservationBtn';

export default function Main() {
  return (
    <div>
      <MainYOLO />
      <ReservationBtn />
      <Maindes />
      <RoomsBody />
      <Blank />
    </div>
  )
}
