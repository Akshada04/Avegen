import React, {Component} from 'react';
import '../MobileNo/MobileNo.css';
import '../OtpNo/OtpNo.css';
import RegistrationHeader from '../Header/RegistrationHeader';
import OTP from '../../assets/Enter OTP/OTP_Graphic.png';
import Pointer from '../../assets/Splash/pointer.png';
import NextImg from '../../assets/Enter_Phone_No/Next.svg';

 class OtpNo extends Component { 
     constructor(props) {
         super(props);
         this.goOTPSuccessPage = this.goOTPSuccessPage.bind(this);
     }

     goOTPSuccessPage() {
        this.props.history.push('/SuccessfullOTP');
     }
     render(){
        return(
            <div className="OtpPage">
                <RegistrationHeader title="REGISTRATION"/>
                <div className = "registrationPage border">
                <h4 className="m-4">Put 4 Digit <b>OTP No from SMS</b></h4>
                <img className="img-fluid" src={OTP} />
                <p className="p-1 mt-4 w-75 mx-auto">Please enter a four digit OTP which you have received on your register mobile number</p>
                <div className="row">
                    <div className="col mb-4">
                            <div className="input-group justify-content-center">
                                <input type="number" className="rounded position-relative text-center" maxLength="1" />
                                <img className="bounce animated position-absolute img-fluid pointer" src={Pointer} /> 
                                <input type="number" className="rounded text-center" />
                                <input type="number" className="rounded text-center" />
                                <input type="number" className="rounded text-center mr-0" />
                                <span className="input-group-btn ml-2">
                                    <img onClick={this.goOTPSuccessPage} className="w-75 img-fluid" src={NextImg} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    }

export default OtpNo;