import "./Home.css";
import video from "../../assets/one.mp4";
import { GrLocation } from "react-icons/gr";
import { FaFacebook, FaTripadvisor } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useState } from "react";

const placesSearches =  [
  "dhalai",
  "sipahijala",
  "Neer mahal",
  "dumboor lake",
  "jampui hills",
  "North Tripura",
  "Ujjayanta Palace",
  "West Tripura",
  "Dumboor Narkel Kunja",
  "Bashgram",
  "Khowai",
  "Heritage Park"
];
const Home = () => {
  const [placesSearch, setPlacesSearch] = useState(placesSearches);
  const [searchVal, setSearchVal] = useState(""); 
  const handleSearch = () => {
    const filterBySearch = placesSearches.filter((item) => {
      if(item.toLowerCase().includes(searchVal.toLowerCase())){
        return item;
      }
    })
    setSearchVal(filterBySearch);

  }
  return (
    <section>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our packages</span>
          <h1 className="homeTitle">Search your Holidays</h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">
              Search your destination place at TRIPURA:
            </label>
            <div className="input flex" >
              <input type="text" placeholder="Enter name here..." onChange={(e) => setSearchVal(e.target.value)}/>
              <GrLocation className="icon" onClick={handleSearch}/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

  

          <div className="searchOptions flex">
           
                <button className="btn" type="submit"> Book Now</button>
       
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
