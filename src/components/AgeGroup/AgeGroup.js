import React, {Component} from 'react';
import RegistrationHeader from '../Header/RegistrationHeader';
import '../AgeGroup/AgeGroup.css';
import NextImg from '../../assets/Enter_Phone_No/Next.svg';
import Pointer from '../../assets/Splash/pointer.png';

class AgeGroup extends Component {
    constructor(props) {
        super(props);
        this.goWelcomeUser = this.goWelcomeUser.bind(this)
    }
    goWelcomeUser() {
        this.props.history.push('/WelcomeUser');
    }
    render() {
    return (
        <div className="AgeDiv">
          <RegistrationHeader title="REGISTRATION"/>
          <div className="border">
              <p className="select mt-4 mb-0">Select Your</p>
              <p className="mt-0 AgeRange"><b>Age Range</b></p>
              <div className="row pl-4 mx-auto">
                    <div className="col mb-4">
                        <div className="col selectAge">
                           <p className="range pt-5 mb-0">18-25</p>
                           <p className="years">Years</p>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="col selectAge position-relative">
                           <p className="range pt-5 mb-0">26-35</p>
                           <p className="years">Years</p>
                           <img className="bounce animated position-absolute img-fluid pointer" src={Pointer} /> 
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="col selectAge">
                           <p className="range pt-5 mb-0">35-50</p>
                           <p className="years">Years</p>
                        </div>
                    </div>
                </div>
                <div className="input-group-btn ml-2 mb-5">
                    <img onClick={this.goWelcomeUser} src={NextImg} />
                </div>
          </div>
        </div>
    );
}
} 

export default AgeGroup;