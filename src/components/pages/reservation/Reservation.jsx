import React from "react";
import style from "../../styles/Reservation.module.css";
import RefundPolicy from "./RefundPolicy";
import ReservationNotice from "./ReservationNotice";
import Blank from "../Blank";
import ReservationHeading from "./ReservationHeading";


function Reservation() {


  return (
    <>
      <Blank />
      <ReservationHeading />
      <div className={style.reserBox}>
        <div className={style.reservationNotice}>
          <ReservationNotice />
        </div>
        <div className={style.iframeBox}>
          <iframe
            src="https://rev.yapen.co.kr/external?ypIdx=24036"
            title="Reservation"
          />
        </div>
      </div>
      <RefundPolicy />
    </>
  );
}

export default Reservation;