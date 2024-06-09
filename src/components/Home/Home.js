import "./Home.css";
import video from "../../assets/one.mp4";
import { GrLocation } from "react-icons/gr";
import { FaFacebook, FaTripadvisor } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Home = () => {
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
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price :</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <a href="https://www.xlayer.in/">
              <span>OUR WEBSITE</span>
            </a>
            <a href="https://www.instagram.com/xlayercom/">
              <FiInstagram className="icon" />
            </a>

            <a href="https://www.facebook.com/xlayercom/">
              <FaFacebook className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
