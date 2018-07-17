import React from 'react';





class AboutPage extends React.Component {
  state = {
    imgUrl: '/images/profile-pic.jpg'
  };

  changePic = () => {
    const pic = this.state.imgUrl === '/images/profile-pic.jpg' ?
    '/images/Goat_profile.jpg' : '/images/profile-pic.jpg';
    this.setState( () => ({imgUrl: pic}))
  };

  render() {
    return (
      <div id="about" className="about-container">
      <div className="content-container__about">
        <div className="flex-item__main main1">
            <div className="profile__split-2">
              <section className="icon__section">

                <div className="icon__item">
                  <a className="icon" href="https://www.linkedin.com/in/eben-stickney-28512417/" target="_blank">
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                </div>
                  <div className="icon__item">
                  <a className="icon" href="https://github.com/ebenStickney" target="_blank">
                    <i className="fab fa-github-square fa-3x"></i>
                  </a>
                </div>
                <div className="icon__item">
                  <a className="icon" href="https://twitter.com/ebenstickney" target="_blank">
                    <i className="fab fa-twitter-square fa-3x"></i>
                  </a>
                </div>
              </section>
              <section>
                <input type="image" className='profile__pic' src={this.state.imgUrl} alt='Profile Picute' onClick={this.changePic} />
              </section>


            </div>

        </div>


        <div className="flex-item__main main2">
          <h4 className="about-header">_Who I am_</h4>

            {this.state.imgUrl === '/images/profile-pic.jpg'?
              <p className="about-me">
                My name is Eben Stickney.  I am a Front End Web Developer who loves design,
                and building applications with React.  Born and raised in Portland, Maine.
                Now residing in Portland, Oregon.  (Message me if you would like me to tell you which
                Portland I like more!) <br /><br />
                BUT WHATEVER YOU DO, DON’T CLICK ON MY PICTURE!!
              </p>
                :
                <p className="about-me">
                  My name is Eben Stickney.  I am a Front End Web Developer who loves design,
                  and building applications with React.  Born and raised in Portland, Maine.
                  Now residing in Portland, Oregon.  (Message me if you would like me to tell you which
                  Portland I like more!) <br /><br />
                  ...Well, this is embarrassing.  Maybe click on it again, before people start staring.
                </p>
          }

          <h4 className="about-header">_What I know_</h4>
          <p className="about-me">
            HTML5, CSS3, ES6, React, Redux, MySQL, Node.js, Git, Bootstrap, Responsive Design, Webpack, Babel, Jest, Express
          </p>

          <h4 className="about-header">_What This Means For You_</h4>
          <p className="about-me">
            I can help build, update and design your website, or help you create the next big app!
            Even if you are not sure exactly what you are looking for, let's have a chat and see if I can be
            of service!
          </p>

          </div>
        </div>
      </div>

    )
  }
};

export default AboutPage;

// "mailto:ebenstickney@gmail.com?subject=WeBDeV" gmail link
