import React from "react";

function MainYOLO() {
  return (
    <>
      <video width="100%" height="100%" loop autoPlay muted>
        <source src={`${process.env.PUBLIC_URL}/yoloView/yoloview.webm`} type="video/webm" />
        {/* <source src="https://cdn.pixabay.com/video/2024/08/13/226218.mp4" type="video/mp4" /> */}
      </video>
    </>
  );
}

export default MainYOLO;
