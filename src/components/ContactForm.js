import React from 'react';



const ContactPage = () => (
  <div className="page-wrap">
   <div className="content-container">
    <div>
      <h3  className="contact__header"> Need help creating your next idea?  Get in touch! </h3>
    </div>
      <section className="icon__section">

        <div className="icon__item">
          <a className="icon" href="https://www.linkedin.com/in/eben-stickney-28512417/" target="_blank">
            <i className="fab fa-linkedin-in fa-5x"></i>
            <span className="icon__title"> LinkedIn </span>
          </a>
        </div>
          <div className="icon__item">
          <a className="icon" href="https://github.com/ebenStickney" target="_blank">
            <i className="fab fa-github fa-5x"></i>
            <span className="icon__title"> GitHub </span>
          </a>
        </div>
        <div className="icon__item">
          <a className="icon" href="mailto:ebenstickney@gmail.com?subject=WeBDeV" target="_blank">
            <i className="fas fa-envelope fa-5x"></i>
            <span className="icon__title"> Email </span>
          </a>
        </div>
      </section>
    </div>
  </div>
);

export default ContactPage;
