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
      <h3 className="h-1"> Raised in Portland, Maine. </h3>
      <h3 className="h-2"> Inspired By Portland, Oregon. </h3>
      <h3 className="h-3"> Elegant Design. </h3>
      <h3 className="h-4"> Fluid Performance. </h3>
      <h3 className="h-5"> Available For Your Vision. </h3>
    </div>
  </div>
)
};

export default Welcome;
