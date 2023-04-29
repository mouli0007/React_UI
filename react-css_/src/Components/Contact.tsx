const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section-center contact-center">
        {/* Contact Title ! */}

        <article className="contact-title">
          <h3>Want latest tour info and updated ?</h3>
          <p>Sign Up for news letter and stay up to date </p>
        </article>

        {/* Contact Form ! */}

        <form className="contact-form">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
          />

          <button className="btn-submit" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
