import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Placeshow.css";
import Img from "../../assets/chabi3.jpg";
import { FiStar } from "react-icons/fi";
import Hotel from "../Hotel/Hotel";
import { useNavigate, useParams } from "react-router-dom";
import ParticularPlaceDetails from "../../datas/ParticularPlaceDetails";


const Placeshow = () => {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const placeDetails = ParticularPlaceDetails.find(
    (item) => item.id === parseInt(id)
  );
  if (!placeDetails) {
    return <div>Place Not Found</div>;
  }
  const handleBooked = () => {
    if(signIn){
      navigate(`/book`);
    } else {
      navigate(`/sign`);
    }
  }
  return (
    <>
      <Navbar />
      <div className="divMain">
        <div className="leftSide">
          <div className="leftLeftSide ">
            <div className="innerImg flex">
              <div>
                <div className="mainBig">
                  <img
                    src={placeDetails.placeImage[0].img}
                    alt={placeDetails.placeName}
                  />
                </div>
                <div className="flex mainSmall">
                  {placeDetails.placeImage.slice(1).map((image) => (
                    <img
                      key={image.id}
                      src={image.img}
                      alt={placeDetails.placeName}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightSide">
          <div className="mainRightSection" key={placeDetails.id}>
            <div className="innerRight">
              <h1>{placeDetails.placeName}</h1>
              <h3>Ticket: </h3>
             <div className="spaceBetween">
             <span className="rate">
                Adult: {placeDetails.ticket.ticketAdult}
              </span>
              {placeDetails.ticket.ticketChild && (
                <span className="rate">
                  Child: {placeDetails.ticket.ticketChild}
                </span>
              )}
             </div>
              <div className="fees span">
                <span className="price">{placeDetails.district}</span>
                <span className="price">{placeDetails.location}</span>
                <span className="icons">
                  {[...Array(5)].map((_, index) => (
                    <FiStar key={index} className="icon" />
                  ))}
                </span>
              </div>
              <p>{placeDetails.description}</p>
              <h2>Visiting Hours: 
                <span key={placeDetails.openingTime.id}>
                  {
                    placeDetails.openingTime.map((item) => (
                      <div className="placeShow">
                        <span>
                        {item.day}
                        </span>
                        <span>
                          {item.time}
                        </span>
                      </div>
                    ))
                  }
                </span>
              </h2>
              <div className="center">
              <button className="btn" onClick={handleBooked}>Book Now</button>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placeshow;
