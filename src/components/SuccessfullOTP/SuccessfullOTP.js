import React, {Component} from 'react';
import '../SuccessfullOTP/SuccessfullOTP.css';
import RegistrationHeader from '../Header/RegistrationHeader';
import SuccessOTP from '../../assets/OTP Success/OTP_Success.png';
import NextImg from '../../assets/Enter_Phone_No/Next.svg';
class SuccessfullOTP extends Component {
    constructor(props) {
        super(props);
        this.goUserSelect = this.goUserSelect.bind(this);
    }

    goUserSelect() {
        this.props.history.push('/UserGender');
    }
    render() {
    return(
        <div className = "SuccessOtp">
        <RegistrationHeader title="REGISTRATION"/>
        <div className = "border">
            <img className="img-fluid mt-5 mb-4" src={SuccessOTP} />
            <p className="my-0">OTP</p>
            <p className="my-0"><b>Successfully Verified</b></p>
            <div className="nextImage">
            <img onClick={this.goUserSelect} className="img-fluid nextImg" src={NextImg} />
            </div>
        </div>
        </div>
    );
}
}

export default SuccessfullOTP;