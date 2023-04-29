import { DiApple, DiAndroid, DiChrome } from "react-icons/di";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          Services <span>we offer</span>{" "}
        </h2>
      </div>

      {/* Main Seciton */}

      <div className="section-center services-center">
        {/* Single Service */}

        <article className="service">
          <span className="service-icon">
            <DiApple className="apple_" />
          </span>
          <div className="service-info">
            <h4 className="service-title">Apple Products</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellendus blanditiis mollitia. Sequi, voluptatem aspernatur?
            </p>
          </div>
        </article>
        <article className="service">
          <span className="service-icon">
            <DiAndroid className="apple_" />
          </span>
          <div className="service-info">
            <h4 className="service-title">Mobile Development</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellendus blanditiis mollitia. Sequi, voluptatem aspernatur?
            </p>
          </div>
        </article>
        <article className="service">
          <span className="service-icon">
            <DiChrome className="apple_" />
          </span>
          <div className="service-info">
            <h4 className="service-title">Chrome SEO Optimization</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellendus blanditiis mollitia. Sequi, voluptatem aspernatur?
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
