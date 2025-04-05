import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Reservation from './components/pages/reservation/Reservation';
import RoomsMain from './components/pages/rooms/RoomsMain';
import RoomDetail from './components/pages/rooms/RoomDetail';
import SpecialMain from './components/pages/specials/SpecialMain';
import LocationMain from './components/pages/location/LocationMain';
import Blank from './components/pages/Blank';

// lazy로 RoomsBody 불러오기
const RoomsBody = lazy(() => import("./components/pages/rooms/RoomsBody"));

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/special" element={<SpecialMain />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/room" element={<RoomsMain />} />
          <Route path="/details/:roomNumber" element={<RoomDetail />} />
          <Route path="/location" element={<LocationMain />} />
          <Route path="/rooms" element={
            <Suspense fallback={<div>객실 정보 불러오는 중...</div>}>
              <RoomsBody />
            </Suspense>
          } />
        </Routes>
      </Suspense>
      <Blank />
      <Footer />
    </HashRouter>
  );
}

export default App;
