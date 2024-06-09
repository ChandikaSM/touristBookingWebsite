import { BrowserRouter, Route as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Placeshowpage from "./pages/placeShowP";
import Signup from "./components/Sign/signUp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Homepage />} >
             <Router path="/home" element={<Homepage/>}/>
             
        
        </Router>
        <Router path="/placeshow/:id" element={<Placeshowpage />} />
        <Router path="/sign" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
