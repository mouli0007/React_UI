import NavImage from "../images/logo.svg";
import { useState } from "react";

import { HiViewList } from "react-icons/hi";
import {
  DiAndroid,
  DiApple,
  DiAngularSimple,
  DiJavascript,
  DiReact,
} from "react-icons/di";
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (): void => {
    setToggle((tru: boolean) => !tru);
  };

  return (
    <header id="home">
      {/* Navbar */}

      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={NavImage} className="nav-logo" alt="" />
            <button
              type="button"
              onClick={handleToggle}
              className="nav-toggle"
              id="nav-toggle"
            >
              <HiViewList />
            </button>
          </div>
          {/* End of Nav Header ! */}

          {/* Footer Links ! */}

          <ul
            className={`nav-links ${toggle ? "display-link" : null} `}
            id="nav-links"
          >
            {/* Single Link */}

            <li>
              <a href="#home" className="nav-link    scroll-link">
                Home
              </a>
            </li>
            {/* End of single Link */}
            {/* Single Link */}

            <li>
              <a href="#home" className="nav-link scroll-link">
                About
              </a>
            </li>
            {/* End of single Link */}
            {/* Single Link */}

            <li>
              <a href="#home" className="nav-link scroll-link">
                Service
              </a>
            </li>
            {/* End of single Link */}
            {/* Single Link */}

            <li>
              <a href="#home" className="nav-link scroll-link">
                Featured
              </a>
            </li>
            {/* End of single Link */}
            {/* Single Link */}

            <li>
              <a href="#home" className="nav-link scroll-link">
                Gallery
              </a>
            </li>
            {/* End of single Link */}
          </ul>

          {/* Nav Icons */}

          <ul className="nav-icons">
            {/* Single icon */}

            <li>
              <a href="#" className="nav-icon">
                <DiAndroid />
              </a>
            </li>
            <li>
              <a href="#" className="nav-icon">
                <DiApple />
              </a>
            </li>
            <li>
              <a href="#" className="nav-icon">
                <DiJavascript />
              </a>
            </li>
            <li>
              <a href="#" className="nav-icon">
                <DiReact />
              </a>
            </li>
            <li>
              <a href="#" className="nav-icon">
                <DiAngularSimple />
              </a>
            </li>
            {/* End of Single icon */}
          </ul>
          {/* End of Footer Icons */}
        </div>
      </nav>

      {/* Hero */}

      <div className="hero">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            natus, aliquam modi quibusdam rerum eum?
          </p>
          <a href="#featured" className="btn hero-btn scroll-link">
            explore tours
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
