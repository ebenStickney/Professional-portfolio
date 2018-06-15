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
      <div className="content-container__about">
        <div className="flex-item__main main1">
          <div className="profile__split">
            <h3 className="profile__header">Eben Stickney</h3>
          </div>
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
              <input type="image" className='profile__pic' src={this.state.imgUrl} alt='Profile Picute' onClick={this.changePic} />

            </div>
        </div>


        <div className="flex-item__main">
        </div>
        <div className="flex-item__main main2">
          <p className="about-me">
          I moved to Montana to create and manage the content of a digital media website,
          with a focus on original weekly comedy podcasts.
          We were hilarious.  As the site’s design needed tweaks,
          I started learning basic programming to do the job myself. I found I had a nack for it.
          However, opportunities came about that required me to put my new coding skills aside,
          and expand my culinary skills, which eventually drove me to Portland’s food scene.
          Yet, my love of programming never went away, and now I am back in it 100% and ready to solve
          all of Portland’s (and beyond) programming needs, one line of code at a time.
          <br />
          <br />
          From website design, to app functionality, I am ready to help out wherever I can.
          Check me out my projects to see what I have done in the past, or go to my contact page to get in touch.
          {this.state.imgUrl === '/images/profile-pic.jpg'?
          <p> BUT WHATEVER YOU DO, DON’T CLICK ON MY PICTURE!! </p> :
          <p> ...Well, this is embarrassing.  Maybe click on it again, before people start staring.</p>
        }
          </p>
        </div>
      </div>

    )
  }
};

export default AboutPage;

// "mailto:ebenstickney@gmail.com?subject=WeBDeV" gmail link
