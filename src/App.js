import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header/>
    <Routes>
    <Route path= "/" element= {<Main />} />
    <Route path= "/special" element= {<SpecialMain />} />
    <Route path= "/reservation" element= {<Reservation />} />
    <Route path= "/room" element= {<RoomsMain />} />
    <Route path="/details/:roomNumber" element={<RoomDetail />} />
    <Route path="/location" element={<LocationMain />} />
    </Routes>
    <Blank />
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
