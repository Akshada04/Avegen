import React from 'react';
import RegistrationHeader from '../Header/RegistrationHeader';
import Pointer from '../../assets/Splash/pointer.png';
import '../FirstVideo/FirstVideo.css';

import Play from '../../assets/welcome/ic-play.png';
const FirstVideo = () => {
    return(
    <div className="FirstVideo">
       <RegistrationHeader title="LET'S START"/>
       <div className="border">
          <p className="mt-5 mb-0 textStyle">Yes!!</p>
          <p><b>Let's get started now</b></p>
          <button type="button" className="btn position-relative mb-5"><img src={Play} className="mr-2" />WATCH YOUR FIRST VIDEO</button>
          <img className="bounce animated position-absolute img-fluid selectVideo" src={Pointer} /> 
       </div>
    </div>
);
}

export default FirstVideo;