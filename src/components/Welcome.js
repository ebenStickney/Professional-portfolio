import React from 'react';
import {Header} from './Header';


class Welcome extends React.Component {
  state = {
    hasScrolled: false
  }

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
  console.log('mounted');
}

componentDidUpdate() {
  window.removeEventListener('scroll', this.handleScroll);
  console.log('update');
}

handleScroll = () => {
  const hasScrolled = this.state.hasScrolled;
  this.setState(() => ({hasScrolled: true}));
  console.log(this.state.hasScrolled);
}
//tomorrow try passing style in as prop to header and use it conditionally.  That worked.
//fuck with some scrollIntoView

 render() {
   const style = this.state.hasScrolled ?
   {opacity: "1",

  } :
  {
    opacity: "0",
    backgroundColor: "transparent"
  };
   console.log(style);

   return (
     <div>
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
     </div>
   )
 }

};




export default Welcome;
