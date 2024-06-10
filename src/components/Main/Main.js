import React, { useState } from "react";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import ParticularPlaceDetails from "../../datas/ParticularPlaceDetails";

const Main = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShowAll(true);
  };
  const handleShowLess = () => {
    setShowAll(false);
  };
  const placeDisplay = showAll
    ? ParticularPlaceDetails
    : ParticularPlaceDetails.slice(0, 6);
  const handleEach = (id) => {
    navigate(`/placeshow/${id}`);
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {placeDisplay.map(
          ({
            id,
            placeName,
            description,
            location,
            district,
            placeImage,
            ticket,
          }) => (
            <div key={id} className="singleDestination">
              <div className="imageDiv imgHotel">
                {placeImage && placeImage.length > 0 && (
                  <img src={placeImage[0].img} alt={placeName} />
                )}
                <div className="desc">
                  <p className="para">{description.slice(0, 50) + "..."}</p>
                </div>
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{placeName}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{district}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {location}
                    </span>
                  </div>

                  <div className="price">
                    <h5>
                      <FaIndianRupeeSign className="icon"/>
                      {ticket.ticketAdult}</h5>
                  </div>
                </div>

                <div className="buttonDiv">
                  <button className="btn flex" onClick={() => handleEach(id)}>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      {!showAll ? (
        <div className="loadMoreBtn">
          <button className="btn" onClick={handleShow}>
            Load More
          </button>
        </div>
      ) : (
        <div className="loadLessBtn">
          <button className="btn" onClick={handleShowLess}>
            Load Less
          </button>
        </div>
      )}
    </section>
  );
};

export default Main;
