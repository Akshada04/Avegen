import React, {Component} from 'react';
import RegistrationHeader from '../../Header/RegistrationHeader';
import '../FemaleName/FemaleName.css';
import userImage from '../../../assets/father or Mother/ic_Mother.png';
import NextImg from '../../../assets/Enter_Phone_No/Next.svg';
import Pointer from '../../../assets/Splash/pointer.png';

class FemaleName extends Component {
    constructor(props) {
        super(props);
        this.goSelectAge = this.goSelectAge.bind(this)
    }
    goSelectAge() {
        this.props.history.push('/SelectAge');
    }
    render() {
    return(
        <div className="UserName">
            <RegistrationHeader title="REGISTRATION"/>
            <div className = "border">
              <p className="enter mt-4 mb-0">Enter</p>
              <p className="mt-0 enterName"><b>your name</b></p>
              <div className="userimage mb-4">
                <img src={userImage} className="img-fluid "/>
              </div>
              <div className="row">
                    <div className="col mb-4">
                        <div className="input-group w-75 mx-auto enterMobileNO">
                            <input type="number" className="form-control rounded mr-0 position-relative" placeholder="Your Name" />
                            <img className="bounce animated position-absolute" src={Pointer} /> 
                            <span className="input-group-btn ml-2">
                                <img onClick={this.goSelectAge} src={NextImg} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
} 

export default FemaleName;