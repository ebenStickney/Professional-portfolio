import React from 'react';



class ContactPage extends React.Component {
  state = {
    hasClicked: true
  }

  handleClick = () => {
    const clicked = this.state.hasClicked;
    this.setState(() => ({hasClicked: !clicked}));
  }

  render() {
    return (
      <div className="page-wrap">
       <div className="content-container">
        <div>
          <h3  className="contact__header"> Need help creating your next idea?  Get in touch! </h3>
        </div>
          <section className="contact__section">
            <div className="contact phone" onClick={this.handleClick}>
              <i className="fas fa-mobile-alt fa-5x"></i>
            </div>

            <div className="contact__button">
              <a className=" contact email" href="mailto:ebenstickney@gmail.com?subject=WeBDeV" target="_blank">
                <i className="fas fa-envelope fa-5x"></i>
                <span className="icon__title"> Email </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    )};
};



export default ContactPage;
