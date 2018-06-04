import React from 'react';


export default class ContactForm extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
        email: '',
        message: '',
        subject: '',
       };
     };



    onEmailChange = (e) => {
      const email = e.target.value;
      this.setState(() => ({ email }));
    };
    onMessageChange = (e) => {
      const message = e.target.value;
      this.setState(() => ({ message }));
    };

    onSubjectChange = (e) => {
      const subject = e.target.value;
      this.setState(() => ({ subject }));
    };

    onSubmit = (e) => {
      e.preventDefault();  //prevent full page refresh

     if (!this.state.description || !this.state.amount) {
         this.setState( () => ( {error: 'Please provide your email and subject'}))
     } else {
         this.setState( () => ( {error: ''}))
         this.props.onSubmit({
             description: this.state.description,
             subject: this.state.subject,
             message: this.state.message
         })
     }
    };

    render() {
        return (
          <div>
            <div className="contact-header"> Contact Me </div>
            <div className="content-container__row">
            <form className='form' onSubmit={this.onSubmit}>
            {this.state.error && <p className='form__error'>{this.state.error}</p>}
              <div>
                <p> * required field </p>
                <input
                  className='text-input'
                  type="text"
                  placeholder="Email*"
                  autoFocus
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
                <input
                  className='text-input'
                  type='text'
                  placeholder='Subject*'
                  value={this.state.subject}
                  onChange={this.onSubjectChange}
                />
               </div>
                <textarea
                  className='textarea'
                  placeholder="Message*"
                  value={this.state.message}
                  onChange={this.onMessageChange}
                >
                </textarea>
              <div>
                <button className='button'>Send Message </button>
              </div>

            </form>
            <section className="icon__section">

              <div className="icon__item">
                <a className="icon" href="https://www.linkedin.com/in/eben-stickney-28512417/" target="_blank">
                  <i className="fab fa-linkedin-in fa-5x"></i>

                </a>
              </div>
                <div className="icon__item">
                <a className="icon" href="https://github.com/ebenStickney" target="_blank">
                  <i className="fab fa-github fa-5x"></i>

                </a>
              </div>
            </section>
          </div>
        </div>

        )
    }
};
