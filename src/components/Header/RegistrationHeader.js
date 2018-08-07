import React from 'react';
import '../Header/RegistrationHeader.css';

const RegistrationHeader  = (props) => {
    return (
    <div className="p-2 Registration_header">
        <img className="img-fluid"  src={require('../../assets/Enter_Phone_No/Ellipse_3.png')} />
        <span className="ml-3 text-white">{props.title}</span>
    </div>
    )
};

export default RegistrationHeader;