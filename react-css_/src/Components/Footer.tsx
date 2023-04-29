import {
  DiApple,
  DiReact,
  DiAndroid,
  DiJavascript,
  DiAngularSimple,
} from "react-icons/di";
const Footer = () => {
  return (
    <footer className="section footer">
      {/* Footer Links ! */}

      <ul className="footer-links">
        {/* Single Link */}

        <li>
          <a href="#home" className="footer-link scroll-link">
            Home
          </a>
        </li>
        {/* End of single Link */}
        {/* Single Link */}

        <li>
          <a href="#home" className="footer-link scroll-link">
            About
          </a>
        </li>
        {/* End of single Link */}
        {/* Single Link */}

        <li>
          <a href="#home" className="footer-link scroll-link">
            Service
          </a>
        </li>
        {/* End of single Link */}
        {/* Single Link */}

        <li>
          <a href="#home" className="footer-link scroll-link">
            Featured
          </a>
        </li>
        {/* End of single Link */}
        {/* Single Link */}

        <li>
          <a href="#home" className="footer-link scroll-link">
            Gallery
          </a>
        </li>
        {/* End of single Link */}
      </ul>

      {/* End of Footer Links ! */}

      {/* Footer Icons */}

      <ul className="footer-icons">
        {/* Single icon */}

        <li>
          <a href="#" className="footer-icon">
            <DiAndroid />
          </a>
        </li>
        <li>
          <a href="#" className="footer-icon">
            <DiApple />
          </a>
        </li>
        <li>
          <a href="#" className="footer-icon">
            <DiJavascript />
          </a>
        </li>
        <li>
          <a href="#" className="footer-icon">
            <DiReact />
          </a>
        </li>
        <li>
          <a href="#" className="footer-icon">
            <DiAngularSimple />
          </a>
        </li>
        {/* End of Single icon */}
      </ul>
      {/* End of Footer Icons */}

      <p className="copyright">
        copyright &copy; backroads travel tour company
        <span id="date"></span>, all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
