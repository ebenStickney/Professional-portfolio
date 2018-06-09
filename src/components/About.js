import React from 'react';





const AboutPage = () => (

    <div className="content-container__about">
      <div className="flex-item__main main1">
        <h3 className="profile__header">Eben Stickney</h3>
        <img className='profile__pic' src='/images/profile-pic.jpg' />
      </div>
      <div className="flex-item__main">
      </div>
      <div className="flex-item__main main2">
        <p className="about-me">
         I am a developer with an enthusiasm for and proficiency with
         building applications with React.  I can help with any project,
         whether it is a simple single page application, or something
         much larger in need of separate state containment.  I will
         test it thoroughly, make it easy to scale, and design it so
         that the UI is seamless and elegant.  To make that possible
         I have worked hard to master ES6, CSS/SASS, noSQL with Firebase
         , and version control with Git.
        <br />
        <br />
        I am eager to be part of any project where I can put my skills to the test.
        Check out my contacts page, to let me know if you would like to collaborate on
        your next project!
        </p>
      </div>
    </div>
);

export default AboutPage;
