import { BrowserRouter, Route as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Placeshowpage from "./pages/placeShowP";
import Signup from "./components/Sign/signUp";
import Hotel from "./components/Hotel/Hotel";
import Footer from "./components/footer/footer";
import Booking from "./components/Placeshow/Booking";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Homepage />} >
             <Router path="/home" element={<Homepage/>}/>
             <Router path="/hotel" element={<Hotel/>}/>
             <Router path="/footer" element={<Footer />}/>
             
        
        </Router>
        <Router path="/placeshow/:id" element={<Placeshowpage />} />
       

         <Router path="/book" element={<Booking />}/>
        <Router path="/sign" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
