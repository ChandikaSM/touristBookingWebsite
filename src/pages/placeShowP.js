import Hotel from "../components/Hotel/Hotel"
import Navbar from "../components/Navbar/Navbar"
import Placeshow from "../components/Placeshow/Placeshow"
import Footer from "../components/footer/footer";
const PlaceshowP = () => {
  return (
    <div>
     <div className=""> <Navbar /></div>
      <Placeshow />
      <Hotel />
      <Footer/>
    </div>
  )
}

export default PlaceshowP


