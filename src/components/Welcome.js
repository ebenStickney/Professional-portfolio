import React from 'react';
import {Header} from './Header';


class Welcome extends React.Component {
  state = {
    hasScrolled: false
  }

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll)
}

handleScroll = () => {
  const hasScrolled = this.state.hasScrolled;
  this.setState(() => ({hasScrolled: true}));
  console.log(this.state.hasScrolled);
}
 render() {
   const style = this.state.hasScrolled ?
   {display: "block"} : {display: "none"};

   return (
     <div>
     <Header style={style}/>
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
