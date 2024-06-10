import { useEffect, useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navBar.css";
import Signup from "../Sign/signUp";
import { useNavigate } from "react-router-dom";

const navData = [
  {
    id: 1,
    navLink: "Home",
    navigated: "/home"
  },
  {
    id: 2,
    navLink: "Explore",
    navigated: "https://www.xlayer.in/"
  },
  {
    id: 3,
    navLink: "Hotels",
    navigated: "/hotel"
  },
  {
    id: 4,
    navLink: "About",
    navigated: "https://www.xlayer.in/"
  },
  {
    id: 5,
    navLink: "Contact",
    navigated: "/footer"
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState("navBar");
  const [scroll, setIsScroll] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsOpen("navBar isOpenNavbar");
  };

  const handleToggleMenuRemove = () => {
    setIsOpen("navBar");
  };

  const handleToggleModal = () => {
    setIsSignUpOpen(!isSignUpOpen);
    console.log("isSignUpOpen:", isSignUpOpen);
  };
  const handlenavigated = () => {
    navigate(`/sign`);
  }
  return (
    <>
      <section className="navBarSection">
        <header className={`header flex ${scroll ? "navScroll" : ""}`}>
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1 className="navHo">
                <MdOutlineTravelExplore className="icon" />
                xLayer
              </h1>
            </a>
          </div>

          <div className={isOpen}>
            <ul className="navLists flex">
              {navData.map((item) => {
                return (
                  <div className="navLink" key={item.id}>
                    <li className="navItem">{item.navLink}</li>
                  </div>
                );
              })}
              <button className="btn navBtnBar" onClick={handleToggleModal}>
                Login
              </button>
              <button className="btn navBtnBarHidden" onClick={handlenavigated}>
                Login
              </button>
            </ul>

            <div className="closeNavBar" onClick={handleToggleMenuRemove}>
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div className="toggleNavBar" onClick={handleToggleMenu}>
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>

      {isSignUpOpen && (
        <Signup isOpen={isSignUpOpen} close={handleToggleModal} />
      )}
    </>
  );
};

export default Navbar;
