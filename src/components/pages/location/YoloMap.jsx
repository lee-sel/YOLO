import React, { useEffect } from 'react';

const YoloMap = () => {
  useEffect(() => {
    // Kakao Maps API 스크립트를 로드합니다.
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=3be954202ffa6c2600333788b8c708d4&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = {
          center: new window.kakao.maps.LatLng(35.86723, 129.27306), // 지도의 중심좌표
          level: 4 // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 스크롤 줌을 비활성화합니다
        map.setZoomable(false);

        // const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
        const imageSrc = `${process.env.PUBLIC_URL}/yolomarker.png`;
        const imageSize = new window.kakao.maps.Size(40, 45); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const markerPosition = new window.kakao.maps.LatLng(35.86693, 129.27327); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage // 마커이미지 설정 
        });

        marker.setMap(map);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </>
  );
};

export default YoloMap;
