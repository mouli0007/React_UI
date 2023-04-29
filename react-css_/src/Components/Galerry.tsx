import Tour_1 from "../images/tour-1.jpeg";
import Tour_2 from "../images/tour-2.jpeg";
import Tour_3 from "../images/tour-3.jpeg";
import Tour_4 from "../images/tour-4.jpeg";
import Tour_5 from "../images/tour-5.jpeg";
import Tour_6 from "../images/tour-6.jpeg";
import Tour_7 from "../images/tour-1.jpeg";
import Tour_8 from "../images/tour-2.jpeg";

import { FcBiotech } from "react-icons/fc";

const Galerry = () => {
  return (
    <section id="galerry">
      <div className="gallery-center">
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_1} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_2} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_3} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_4} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_5} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_6} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_7} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
        {/* Single ! */}

        <article className="gallery-img-container">
          <img src={Tour_8} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <FcBiotech />
          </a>
        </article>
        {/* End og Single ! */}
      </div>
    </section>
  );
};

export default Galerry;
