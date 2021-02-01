// import React from 'react';
// import '../../App.css';
// import Lottie from 'react-lottie';
// import animationData from './data';

// function Contact() {
//   const defaultOptions = {
//     loop: true,
//     autoplay: false,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   };


//   return (
//     <div>
//         <h1>Kontakt Side</h1>
//         {/* <button onMouseEnter={() => runAnimation()}>Yoyoyo</button> */}
//         {/* <button onMouseEnter={() => runAnimation()}>Yoyoyo</button> */}
//         <Lottie 
// 	    options={defaultOptions}
//         height={100}
//         width={100}
//       />
//     </div>
//   );
// }



// export default Contact;


import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './data';
import './Contact.css';

class ControlledLottie extends Component {
  state = {isStopped: false, isPaused: false}

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div className="controlled">
        <h1>Controlled Lottie</h1>
        <p>Uses state manipulation to start, stop and pause animations</p>
        <div className="lottiediv" onMouseOver={() => this.setState({isStopped: false})} onMouseOut={() => this.setState({isStopped: true, isPaused: false })}>
        <Lottie options={defaultOptions}
              height={100}
              width={100}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />
        </div>
      </div>
    )
  }
}

export default ControlledLottie;