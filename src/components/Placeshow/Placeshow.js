import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Placeshow.css";
import Img from "../../assets/chabi3.jpg";
import { FiStar } from "react-icons/fi";
import Hotel from "../Hotel/Hotel";
import { useParams } from "react-router-dom";

const ParticularPlaceDetails = [
  {
    id: 1,
    placeName: "Dumboor Lake",
    description:
      "Dumboor Lake is a charming water body located in Amarpur Sub Division 120 Km away from Agartala. The look of the lake is like tabour shaped small drum, 'Dumboor' of Lord Shiva from which the name 'Dumboor' originates. A massive and breathtaking water body of 41 sq.km. with an unending spell of luxuriant green vegetation all around stands majestic for her exceedingly charming beauty and 48 islands in the midst of the lake. Migratory birds and water sports facilities are additional attractions. There is a Hydel Project near the lake from where River Gomati originates and this is called Tirthamukh where on 14th January every year famous ‘Pous Sankranti Mela’ takes place. The lake is the confluence of rivers Raima and Sarma. Various species of migratory birds are visible in the winter and it has rich reservoir of natural and cultured fishes. In one of the islands, 'Narkel Kunja' has been developed.",
    location: "Dhalai, Tripura",
    openingTime: [
      { id: 1, day: "Monday", time: "9:00 AM to 5:00 PM" },
      { id: 2, day: "Tuesday", time: "9:00 AM to 5:00 PM" },
      { id: 3, day: "Wednesday", time: "9:00 AM to 5:00 PM" },
      { id: 4, day: "Thursday", time: "9:00 AM to 5:00 PM" },
      { id: 5, day: "Friday", time: "9:00 AM to 5:00 PM" },
      { id: 6, day: "Saturday", time: "9:00 AM to 5:00 PM" },
      { id: 7, day: "Sunday", time: "9:00 AM to 5:00 PM" },
    ],
    ticket: { ticketAdult: 20, ticketChild: 10 },
    district: "Dhalai",
    placeImage: [
      {
        id: 1,
        img: "https://www.taleof2backpackers.com/wp-content/uploads/2019/12/Dumboor-Lake-in-tripura-1080x810.jpg",
      },
      { id: 2, img: "https://i.ytimg.com/vi/O9nunBi2yGc/maxresdefault.jpg" },
      { id: 3, img: "https://i.ytimg.com/vi/J1N0XfEpv7A/maxresdefault.jpg" },
    ],
  },
  {
    id: 2,
    placeName: "Neer Mahal",
    description:
      "Neer Mahal, also known as the Water Palace, is a stunning architectural marvel built in 1930 by the Maharaja of Tripura. Located in the middle of Rudrasagar Lake, the palace is a blend of Hindu and Mughal architectural styles. It is surrounded by beautiful gardens and offers boat rides to visitors.",
    location: "Rudrasagar Lake, Melaghar, Tripura",
    openingTime: [
      { day: "Monday", time: "9:00 AM to 5:00 PM" },
      { day: "Tuesday", time: "9:00 AM to 5:00 PM" },
      { day: "Wednesday", time: "9:00 AM to 5:00 PM" },
      { day: "Thursday", time: "9:00 AM to 5:00 PM" },
      { day: "Friday", time: "9:00 AM to 5:00 PM" },
      { day: "Saturday", time: "9:00 AM to 5:00 PM" },
      { day: "Sunday", time: "9:00 AM to 5:00 PM" },
    ],
    ticket: { ticketAdult: 50 },
    district: "Sipahijala",
    placeImage: [
      {
        id: 1,
        img: "https://www.taleof2backpackers.com/wp-content/uploads/2019/12/Neermahal-in-tripura.jpg",
      },
      {
        id: 2,
        img: "https://www.india.com/wp-content/uploads/2019/01/Neermahal.png",
      },
    ],
  },
  {
    id: 3,
    placeName: "Jampui Hills",
    description:
      "Jampui Hills, located in North Tripura, is known for its scenic beauty, pleasant climate, and orange orchards. It is part of the Mizo Hills range and offers panoramic views of the surrounding areas. It is a popular destination for trekking and picnicking.",
    location: "North Tripura",
    openingTime: [
      { day: "Monday", time: "Open all day" },
      { day: "Tuesday", time: "Open all day" },
      { day: "Wednesday", time: "Open all day" },
      { day: "Thursday", time: "Open all day" },
      { day: "Friday", time: "Open all day" },
      { day: "Saturday", time: "Open all day" },
      { day: "Sunday", time: "Open all day" },
    ],
    ticket: { ticketAdult: 0 },
    district: "North Tripura",
    placeImage: [
      { id: 1, img: "https://i.ytimg.com/vi/DgwHGwaEGyE/maxresdefault.jpg" },
      {
        id: 2,
        img: "https://travelplanet.in/wp-content/uploads/2017/12/Jampui-Hills-source-Holiday-Rentals.jpg",
      },
    ],
  },
  {
    id: 4,
    placeName: "Ujjayanta Palace",
    description:
      "Ujjayanta Palace, located in the heart of Agartala, is a former royal palace that now serves as a state museum showcasing Tripura's rich cultural heritage. Built in 1901, it features stunning Mughal-style gardens, large artificial lakes, and a beautiful museum.",
    location: "Agartala, Tripura",
    openingTime: [
      { day: "Monday", time: "10:00 AM to 5:00 PM" },
      { day: "Tuesday", time: "10:00 AM to 5:00 PM" },
      { day: "Wednesday", time: "10:00 AM to 5:00 PM" },
      { day: "Thursday", time: "10:00 AM to 5:00 PM" },
      { day: "Friday", time: "10:00 AM to 5:00 PM" },
      { day: "Saturday", time: "10:00 AM to 5:00 PM" },
      { day: "Sunday", time: "10:00 AM to 5:00 PM" },
    ],
    ticket: { ticketAdult: 20 },
    district: "West Tripura",
    placeImage: [
      {
        id: 1,
        img: "https://www.gosahin.com/go/p/c/1519505316_Ujjayanta-Palace1.jpg",
      },
      {
        id: 2,
        img: "https://www.connectingtraveller.com/images/localtip/1660603987images%20(28).jpeg",
      },
    ],
  },
  {
    id: 5,
    placeName: "Sipahijola Wildlife Sanctuary",
    description:
      "Sipahijola Wildlife Sanctuary is a zoological park featuring a wide variety of wildlife including monkeys, leopards, birds, and tigers. It also has an artificial lake where visitors can enjoy boating.",
    location: "Bishalgarh, Tripura",
    openingTime: [
      { day: "Monday", time: "8:00 AM to 4:00 PM" },
      { day: "Tuesday", time: "8:00 AM to 4:00 PM" },
      { day: "Wednesday", time: "8:00 AM to 4:00 PM" },
      { day: "Thursday", time: "8:00 AM to 4:00 PM" },
      { day: "Friday", time: "8:00 AM to 4:00 PM" },
      { day: "Saturday", time: "8:00 AM to 4:00 PM" },
      { day: "Sunday", time: "8:00 AM to 4:00 PM" },
    ],
    ticket: { ticketAdult: 20 },
    district: "Sepahijala",
    placeImage: [
      { id: 1, img: "https://i.ytimg.com/vi/NrNa7Co2EPg/maxresdefault.jpg" },
      {
        id: 2,
        img: "https://tse4.explicit.bing.net/th?id=OIP.AE-e0AZr9yS0636VpHORbQHaE8&pid=Api&P=0&h=180",
      },
    ],
  },
  {
    id: 6,
    placeName: "Dumboor Narkel Kunja",
    description:
      "Dumboor Narkel Kunja beckons the nature enthusiast with its plethora of offerings. Glide across the glassy surface of the lake in a traditional wooden boat, feeling the cool spray on your face as you weave through the labyrinthine beauty of the islands. Hike through verdant trails, dappled with sunlight filtering through the dense foliage, and discover hidden waterfalls cascading down moss-covered rocks..",
    location: "Dhalai, Tripura",
    openingTime: [
      { day: "Monday", time: "8:00 AM to 4:00 PM" },
      { day: "Tuesday", time: "8:00 AM to 4:00 PM" },
      { day: "Wednesday", time: "8:00 AM to 4:00 PM" },
      { day: "Thursday", time: "8:00 AM to 4:00 PM" },
      { day: "Friday", time: "8:00 AM to 4:00 PM" },
      { day: "Saturday", time: "8:00 AM to 4:00 PM" },
      { day: "Sunday", time: "8:00 AM to 4:00 PM" },
    ],
    ticket: { ticketAdult: 180 },
    district: "Dhalai",
    placeImage: [
      {
        id: 1,
        img: "https://www.tripuraindia.in/assets/upload_images/news_images/Narikel-Kunja.jpg",
      },
      { id: 2, img: "https://i.ytimg.com/vi/2vmHkdg5LM0/maxresdefault.jpg" },
    ],
  },
  {
    id: 7,
    placeName: "Bashgram",
    description:
      "Tripura is home to India’s first bamboo park and the country’s first multi-purpose ‘Bashgram (bamboo town),’ built to promote eco-tourism and attract visitors, yoga enthusiasts, and the environment lovers.‘Bashgram’ was created on nine acres of barren land by some youths led by bamboo architect cum expert Manna Roy in western Tripura‘s Katlamara, just along the India-Bangladesh border. It has already attracted thousands of tourists, including foreigners and environmentalists, from across India.",
    location: "Khowai, Tripura",
    openingTime: [
      { day: "Monday", time: "8:00 AM to 4:00 PM" },
      { day: "Tuesday", time: "8:00 AM to 4:00 PM" },
      { day: "Wednesday", time: "8:00 AM to 4:00 PM" },
      { day: "Thursday", time: "8:00 AM to 4:00 PM" },
      { day: "Friday", time: "8:00 AM to 4:00 PM" },
      { day: "Saturday", time: "8:00 AM to 4:00 PM" },
      { day: "Sunday", time: "8:00 AM to 4:00 PM" },
    ],
    ticket: { ticketAdult: 70 },
    district: "Dhalai",
    placeImage: [
      {
        id: 1,
        img: "https://www.tripuraindia.in/assets/upload_images/news_images/Bashgram-to-push-eco-tourism.jpg",
      },
      { id: 2, img: "https://i.ytimg.com/vi/kwigl0Klqiw/maxresdefault.jpg" },
    ],
  },
  {
    id: 8,
    placeName: "Heritage Park",
    description:
      "The main attraction of the heritage park is that it offers the travellers all the flavours of Tripura at a single spot. All the glamour, vigour and wonder of Tripura are presented to the tourists on a well decorated palate. The miniature versions of the wonders of Tripura namely Unakoti sculptures, Neermahal Palace, Ujjayanta Palace, Tripura Sundari Temple, Stone relics of Pilak, Mahamuni, Chandrapur etc. To give more grace to the Heritage Park, the addition of many natural resources of the Tripura forestry is planted on the natural forest part of the park. The indigenous tress and exotic flowers and animals of the land are preserved in this part of the park. The Park is further decorated by heritage benches, stone statures, monuments, earthen potteries, wood carving and much more to keep visitors interested and entertained in this serene ambience of the miniature Tripura.",
    location: "West, Tripura",
    openingTime: [
      { day: "Monday", time: "8:00 AM to 4:00 PM" },
      { day: "Tuesday", time: "8:00 AM to 4:00 PM" },
      { day: "Wednesday", time: "8:00 AM to 4:00 PM" },
      { day: "Thursday", time: "8:00 AM to 4:00 PM" },
      { day: "Friday", time: "8:00 AM to 4:00 PM" },
      { day: "Saturday", time: "8:00 AM to 4:00 PM" },
      { day: "Sunday", time: "8:00 AM to 4:00 PM" },
    ],
    ticket: { ticketAdult: 10 },
    district: "Dhalai",
    placeImage: [
      {
        id: 1,
        img: "https://th.bing.com/th/id/OIP.th6m9dAhl0RZfT5OTlhs0AAAAA?rs=1&pid=ImgDetMain",
      },
      {
        id: 2,
        img: "https://www.gosahin.com/go/p/c/1519460663_Heritage-Park4.jpg",
      },
    ],
  },
  {
    id: 9,
    placeName: "Heritage Park",
    description:
      "Khumulwng Eco park is located in the clean and beautiful town of Khumulwng in Tripura.The park is spread across a large area with greeneries all around. We were fortunate to see the flower blooming all around the park especially different types of marigold.Entry fee to the park is just Rs 20. The park offers different type of recreational activities for all age groups as it is divided into different areas such as children park, flower park, boating etc.Exploring the park will take atleast 2-2.5 hrs by walk. Tom tom (e-rickshaw) is also available for roaming around the park.",
    location: "West, Tripura",
    openingTime: [
      { day: "Monday", time: "8:00 AM to 4:00 PM" },
      { day: "Tuesday", time: "8:00 AM to 4:00 PM" },
      { day: "Wednesday", time: "8:00 AM to 4:00 PM" },
      { day: "Thursday", time: "8:00 AM to 4:00 PM" },
      { day: "Friday", time: "8:00 AM to 4:00 PM" },
      { day: "Saturday", time: "8:00 AM to 4:00 PM" },
      { day: "Sunday", time: "8:00 AM to 4:00 PM" },
    ],
    ticket: { ticketAdult: 10 },
    district: "Dhalai",
    placeImage: [
      { id: 1, img: "https://i.ytimg.com/vi/fFkhPN_iOQg/maxresdefault.jpg" },
      { id: 2, img: "https://i.ytimg.com/vi/0jKfD6E2tE0/maxresdefault.jpg" },
    ],
  },
];
const Placeshow = () => {
  const { id } = useParams();
  const placeDetails = ParticularPlaceDetails.find(
    (item) => item.id === parseInt(id)
  );
  if (!placeDetails) {
    return <div>Place Not Found</div>;
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
              <span className="rate">
                Adult: {placeDetails.ticket.ticketAdult}
              </span>
              {placeDetails.ticket.ticketChild && (
                <span className="rate">
                  Child: {placeDetails.ticket.ticketChild}
                </span>
              )}
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
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placeshow;
