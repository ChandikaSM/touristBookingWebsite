import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Main/Main.css";
const hotelData = [
  {
    id: 1,
    name: "Tripura Palace Hotel",
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/eb/fb/58/hotel-palace-inn.jpg?w=700&h=-1&s=1",
    description:
      "Experience luxury and comfort at Tripura Palace Hotel. Located in the heart of Agartala, our hotel offers spacious rooms, exquisite dining options, and top-notch amenities. Whether you're here for business or leisure, we ensure a memorable stay for all our guests.",
    price: "Starting from 3,500/day",
    review: "4.8",
    location: "Agartala",
  },
  {
    id: 2,
    name: "Royal Retreat Resort",
    url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/8f/23/fb/the-lower-pool-for-the.jpg",
    description:
      "Escape to serenity at Royal Retreat Resort. Nestled amidst lush greenery, our resort offers a tranquil environment for relaxation and rejuvenation. With luxurious villas, a spa, and recreational facilities, we cater to all your needs for a perfect getaway.",
    price: "Starting from 4,000/day",
    review: "4.7",
    location: "Udaipur",
  },
  {
    id: 3,
    name: "Hilltop Haven Hotel",
    url: "http://www.hotelhilltopheaven.com/img/gallery/1.jpg",
    description:
      "Experience the breathtaking views of the hills at Hilltop Haven Hotel. Perched on a hillside, our hotel offers panoramic vistas of the surrounding landscape. Indulge in luxury accommodation and personalized service for a memorable stay.",
    price: "Starting from 3,200/day",
    review: "4.6",
    location: "Ambassa",
  },
  {
    id: 4,
    name: "Royal Retreat Resort",
    url: "https://cdn.luxuo.com/2020/03/660-1581496974508247-1.jpg",
    description:
      "Escape to serenity at Royal Retreat Resort. Nestled amidst lush greenery, our resort offers a tranquil environment for relaxation and rejuvenation. With luxurious villas, a spa, and recreational facilities, we cater to all your needs for a perfect getaway.",
    price: "Starting from 4,000/day",
    review: "4.7",
    location: "Udaipur",
  },
];

const Hotel = () => {
  const navigate = useNavigate();
  const handleEach = (id) => {
    navigate(`/hotel/${id}`);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited Hotels</h3>
      </div>

      <Slider {...settings}>
        {hotelData.map(
          ({ id, url, description, location, name, price, review }) => {
            return (
              <div className="slider">
                <div key={id} className="singleDestination">
                  <div className="imageDiv imageHotel">
                    <img src={url} alt={name} />
                    <div className="desc">
                      <p className="para">{description.slice(0, 50) + "..."}</p>
                    </div>
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{name}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees">
                      <div className="price hotel">
                        <h5>{price}</h5>
                      </div>
                    </div>
                    <div className="buttonDiv hotelDiv">
                      <button
                        className="btn flex"
                        onClick={() => handleEach(id)}
                      >
                        DETAILS <HiOutlineClipboardCheck className="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Slider>
    </section>
  );
};

export default Hotel;
