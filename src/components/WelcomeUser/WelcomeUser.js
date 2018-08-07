import React from 'react';
import RegistrationHeader from '../Header/RegistrationHeader';
import WelcomeImg from '../../assets/welcome/ic-welcom.png';
import '../WelcomeUser/WelcomeUser.css';

const WelcomeUser = () => {
    return(
        <div className="WelcomeUser">
           <RegistrationHeader title="REGISTRATION DONE"/>
           <div className="border">
              <div className="WelcomeImg my-4">
                <img src={WelcomeImg} />
              </div>
              <div className="welcomeSaathhealth">
                  <p className="mb-0"> You Are </p>
                  <p><b>Welcome to Saathhealth</b></p>
                  <p className="userName mb-5"></p>
              </div>
           </div>
        </div>
    );
}

export default WelcomeUser;