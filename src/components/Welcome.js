import React from 'react';


const Welcome = (props) => {
  // const bgSrc = props.bgSrc;
  const style = {
    background: "url('/images/mt-fade-bg_edited_3.jpg')",
    backgroundSize: "cover",
    display: "flex",
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center'
  }
return (
  <div className="welcomePage">
    <div className="welcome-content">
      <div className="logo">
        <img src="/images/logo-500.png" />
      </div>
      <h3 className="blurb"> Raised in Portland, Maine. <br />
           Inspired By Portland, Oregon.  <br />
           Elegant Design.  <br />
           Fluid Performance.  <br />
           Available For Your Vision.
      </h3>
    </div>
  </div>
)
};

export default Welcome;
