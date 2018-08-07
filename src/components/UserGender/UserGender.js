import React, {Component} from 'react';
import RegistrationHeader from '../Header/RegistrationHeader';
import '../UserGender/UserGender.css';
import FatherImg from '../../assets/father or Mother/ic_Father.png';
import MotherImg from '../../assets/father or Mother/ic_Mother.png';
import NextImg from '../../assets/Enter_Phone_No/Next.svg';
import Pointer from '../../assets/Splash/pointer.png';

class Gender extends Component {
    constructor(props) {
        super(props);
        this.goSelectedUser = this.goSelectedUser.bind(this)
    }
    goSelectedUser() {
        this.props.history.push('/Name');
    }
    render() {
    return (
        <div className="Usergender">
            <RegistrationHeader title="REGISTRATION"/>
            <div className="border">
            <p className="selectgender mb-0">Are you a</p>
            <p className="mt-0 selectUser"><b>Father or Mother?</b></p>
                <div className="row w-50 d-inline-block">
                    <div className="col mb-4">
                   <div className="SelectName mx-auto">
                    <img src={FatherImg} className="rounded-circle" alt="Father" />
                    <h4 className="mt-3 Name">Father</h4> 
                    </div>
                    </div>
                </div>
                <div className="row w-50 d-inline-block">
                    <div className="col mb-4">
                      <div className="SelectName mx-auto">
                      <img src={MotherImg} className="mother" alt="Mother" />
                      <h4 className="mt-3 Name">Mother</h4>
                      </div> 
                      <img className="bounce animated position-absolute img-fluid selectPointer" src={Pointer} /> 
                    </div>
                </div>
                <div className="nextImage  mb-4">
                      <img onClick={this.goSelectedUser}  className="img-fluid nextImg" src={NextImg} />
                </div>
            </div>
        </div>
    );
}
}

export default Gender;