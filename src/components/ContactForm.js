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
            <div className="content-container">
            <h2>Contact Me</h2>
            <form className='form' onSubmit={this.onSubmit}>
            {this.state.error && <p className='form__error'>{this.state.error}</p>}
              <input
                className='text-input'
                type="text"
                placeholder="Email"
                autoFocus
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              <input
                className='text-input'
                type='text'
                placeholder='Subject'
                value={this.state.subject}
                onChange={this.onSubjectChange}
              />
              <textarea
                className='textarea'
                placeholder="Add a note (optional)"
                value={this.state.message}
                onChange={this.onMessageChange}
              >
              </textarea>
              <div>
                <button className='button'>Save Expense</button>
              </div>

            </form>
            </div>

        )
    }
};
