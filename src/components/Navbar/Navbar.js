import { useEffect, useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navBar.css";
import { set } from "firebase/database";
import Signup from "../Sign/signUp";

const navData = [
  {
    id: 1,
    navLink: "Home",
  },
  {
    id: 2,
    navLink: "Explore",
  },
  {
    id: 3,
    navLink: "Hotels",
  },
  {
    id: 4,
    navLink: "About",
  },
  {
    id: 5,
    navLink: "Contact",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState("navBar");
  const [scroll, setIsScroll] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

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
                  <div className="navLink">
                    <li className="navItem">{item.navLink}</li>
                  </div>
                );
              })}
              <button className="btn navBtnBar" onClick={handleToggleModal}>
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
