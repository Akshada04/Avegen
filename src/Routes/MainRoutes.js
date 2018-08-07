import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Registration from '../components/MobileNo/MobileNo';
import OtpNo from '../components/OtpNo/OtpNo';
import SuccessfullOTP from '../components/SuccessfullOTP/SuccessfullOTP';
import Gender from '../components/UserGender/UserGender';
// import SplashScreen from '../components/SplashScreen/SplashScreen';
import FemaleName from '../components/Name/FemaleName/FemaleName';
import AgeGroup from '../components/AgeGroup/AgeGroup';
import WelcomeUser from '../components/WelcomeUser/WelcomeUser';
import FirstVideo from '../components/FirstVideo/FirstVideo';
const MainRoutes = withRouter(({ location }) => (
    <Switch location={location}>
    <Route exact path={"/MobileNo"} component={Registration} />
    <Route exact path={"/OTPNo"} component={OtpNo} />
    <Route exact path={"/SuccessfullOTP"} component={SuccessfullOTP} />
    <Route exact path={"/UserGender"} component={Gender} />
    <Route exact path={"/Name"} component={FemaleName} />
    <Route exact path={"/SelectAge"} component = {AgeGroup} />
    <Route exact path={"/WelcomeUser"} component = {WelcomeUser} />
    <Route exact path={"/FirstVideo"} component = {FirstVideo} />
    {/* <Route exact path={"/SplashScreen"} component={SplashScreen} /> */}
    </Switch>
));

export default MainRoutes;