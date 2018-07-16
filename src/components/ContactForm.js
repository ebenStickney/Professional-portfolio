import React from 'react';




class ContactPage extends React.Component {
  state = {
    hasClicked: false
  }

  handleClick = () => {
    const clicked = this.state.hasClicked;
    this.setState(() => ({hasClicked: !clicked}));
  }

  render() {
    return (
      <div id="contact" className="page-wrap">
        <div>
          <h3  className="contact__header"> Need help creating your next idea?  Get in touch! </h3>
        </div>
        <section className="icon__section__contact">

          <div className="icon__item">
            <a className="icon" href="https://www.linkedin.com/in/eben-stickney-28512417/" target="_blank">
              <i className="fab fa-linkedin fa-5x"></i>
            </a>
          </div>
          <div className="icon__item">
            <a className="icon" href="https://twitter.com/ebenstickney" target="_blank">
              <i className="fab fa-twitter-square fa-5x"></i>
            </a>
          </div>
          <div className="icon__item">
            <a className="icon" href="mailto:ebenstickney@gmail.com?subject=Web_Design" target="_blank">
              <i className="fas fa-envelope-square fa-5x"></i>
            </a>
          </div>
          <div className="icon__item">
          <a className="icon phone" onClick={this.handleClick}>
            <i className="fas fa-phone-square fa-5x"></i>
          </a>
        </div>
        </section>
        {
          this.state.hasClicked && <p className="phone-message">Emails are checked frequently, but if you must get in touch, you can reach me at: (207) 329-1226</p>
        }
      </div>
    )};
};



export default ContactPage;
