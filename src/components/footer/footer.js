import { useState } from "react";
import "./footer.css";
import { FiChevronRight} from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import district from "../../datas/district";

const Footer = () => {
  const [temple, setTemple] = useState({});
  const [picnic, setPicnic] = useState({});
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const handleTemple = (placeId) => {
    setTemple((prevState) => ({
      ...prevState,
      [placeId]: !prevState[placeId],
    }));
  };
  const handlePicnic = (picnicId) => {
    setPicnic((prevState) => ({
      ...prevState,
      [picnicId]: !prevState[picnicId],
    }));
  };
  return (
    <section className="footer">
      <div className="contactDiv flex">
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                xLayer
              </a>
            </div>

            <div className="flex">
              <div className="footerParagraph">
                xLayer Technologies is a fast-growing technology services and
                product company focused on communication, embedded and IoT
                space. Our customers include startups and MNCs from US, India
                and Asia.
              </div>
              <div className="footerSocials">
                <AiOutlineTwitter className="icon" />
                <AiFillYoutube className="icon" />
                <AiFillInstagram className="icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">TRIPURA TOURISTS PLACE</span>
            <div>
              {district.map((item) => {
                return (
                  <li className="footerList" key={item.id}>
                    <h3 className="itemName">{item.name}</h3>
                    <ul>
                      {item.places.map((place) => (
                        <div key={place.id} className="templeHead">
                          {place.temple && place.temple.length > 0 && (
                            <li className="footerList flex">
                              <FiChevronRight className="icon" />
                              <span
                                onClick={() => handleTemple(place.id)}
                                className="heading"
                              >
                                Temples:
                              </span>
                              {temple[place.id] && (
                                <ul className="temple">
                                  {place.temple.map((temple) => (
                                    <li
                                      key={temple.id}
                                      className="footerList flex templeInner"
                                    >
                                      <FiChevronRight className="icon" />
                                      {temple.name}
                                      {console.log("hello", temple.name)}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          )}
                          {place.picnic && place.picnic.length > 0 && (
                            <li className="footerList flex">
                              <FiChevronRight className="icon" />
                              <span
                                onClick={() => handlePicnic(picnic.id)}
                                className="heading"
                              >
                                Picnic Spots
                              </span>
                              {picnic[picnic.id] && (
                                <ul className="picnic">
                                  {place.picnic.map((picnic) => (
                                    <li
                                      key={picnic.id}
                                      className="footerList flex"
                                    >
                                      <FiChevronRight className="icon" />
                                      {picnic.name}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          )}
                        </div>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="endFooter">
        <span>@copyright{currentYear}</span>
      </div>
    </section>
  );
};

export default Footer;
