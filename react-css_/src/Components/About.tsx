import AboutImg from "../images/about.jpeg";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          About <span>Us</span>{" "}
        </h2>
      </div>

      {/* End to title */}

      <div className="section-center about-center">
        {/* About Image */}

        <article className="about-img">
          <img src={AboutImg} alt="aboutPhoto" className="about-photo" />
        </article>

        {/* About Info */}

        <article className="about-info">
          <h3>Explore the Difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            voluptatem officia sequi quaerat similique dolorem debitis quibusdam
            itaque. Fuga, earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            debitis. Mollitia possimus vero asperiores vitae aspernatur
            voluptatibus corrupti repudiandae quis?
          </p>

          <a href="#" className="btn">
            Explore
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
