import React, {Component} from 'react';
import RegistrationHeader from '../Header/RegistrationHeader';
import MobileImage from '../../assets/Enter_Phone_No/mobileNumber.png';
import NextImg from '../../assets/Enter_Phone_No/Next.svg';
import Pointer from '../../assets/Splash/pointer.png';
import '../MobileNo/MobileNo.css';
 class MobileNo extends Component {
     constructor(props) {
         super(props);
         this.goNextPage = this.goNextPage.bind(this);
     }

     goNextPage() {
         this.props.history.push('/OTPNo');
     }
     render(){
        return(
            <div className="MobileNoPage">
                <RegistrationHeader title="REGISTRATION" />
                <div className = "registrationPage border">
                    <h4 className="m-4">Type Your <b>Mobile Number</b></h4>
                    <img className="img-fluid" src={MobileImage} />
                    <p className="p-1 mt-4 mb-5 w-75 mx-auto">You need to write your phone number so you can get one time password on this no.</p>
                    <div className="row">
                        <div className="col mb-4">
                            <div className="input-group w-75 mx-auto enterMobileNO">
                                <input type="number" className="form-control rounded mr-0 position-relative" placeholder="Your Mobile No" />
                                <img className="bounce animated position-absolute" src={Pointer} /> 
                                <span className="input-group-btn ml-2">
                                    <img onClick={this.goNextPage} src={NextImg} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileNo;