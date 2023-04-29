import Tour_1 from "../images/tour-1.jpeg";
import Tour_2 from "../images/tour-2.jpeg";
import Tour_3 from "../images/tour-3.jpeg";
import Tour_4 from "../images/tour-4.jpeg";
import Tour_5 from "../images/tour-5.jpeg";
import Tour_6 from "../images/tour-6.jpeg";

import { FaAmazonPay } from "react-icons/fa";

const FeaturedTours = () => {
  return (
    <section className="section" id="featured">
      <div className="section-title">
        <h2>
          Featured <span>Tours</span>{" "}
        </h2>
      </div>

      {/* Section */}

      <div className="section-center featured-center">
        {/* Single Tour */}

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour_1} alt="Tours" className="tour-img" />
            <p className="tour-date">august 26th, 2020</p>
          </div>

          {/* Tour info */}

          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              vero nisi veniam adipisci explicabo.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <FaAmazonPay className="amazon_" />
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        {/* End of Single Tour */}

        {/* Single Tour */}

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour_2} alt="Tours" className="tour-img" />
            <p className="tour-date">august 26th, 2020</p>
          </div>

          {/* Tour info */}

          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              vero nisi veniam adipisci explicabo.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <FaAmazonPay className="amazon_" />
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        {/* End of Single Tour */}

        {/* Single Tour */}

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour_3} alt="Tours" className="tour-img" />
            <p className="tour-date">august 26th, 2020</p>
          </div>

          {/* Tour info */}

          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              vero nisi veniam adipisci explicabo.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <FaAmazonPay className="amazon_" />
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        {/* End of Single Tour */}
        {/* Single Tour */}

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour_4} alt="Tours" className="tour-img" />
            <p className="tour-date">august 26th, 2020</p>
          </div>

          {/* Tour info */}

          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              vero nisi veniam adipisci explicabo.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <FaAmazonPay className="amazon_" />
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        {/* End of Single Tour */}
        {/* Single Tour */}

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour_5} alt="Tours" className="tour-img" />
            <p className="tour-date">august 26th, 2020</p>
          </div>

          {/* Tour info */}

          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              vero nisi veniam adipisci explicabo.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <FaAmazonPay className="amazon_" />
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        {/* End of Single Tour */}
        {/* Single Tour */}

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour_6} alt="Tours" className="tour-img" />
            <p className="tour-date">august 26th, 2020</p>
          </div>

          {/* Tour info */}

          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              vero nisi veniam adipisci explicabo.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <FaAmazonPay className="amazon_" />
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        {/* End of Single Tour */}
          </div>
          
          <div className="tour-btn">
              <a href="#" className="btn">All Tours</a>
          </div>
    </section>
  );
};

export default FeaturedTours;
