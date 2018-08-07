import React, {Component} from 'react';
import '../Layout/Layout.css'
import MainRoutes from '../../Routes/MainRoutes';
import {withRouter} from 'react-router-dom';
import SplashScreen from '../SplashScreen/SplashScreen';
import NextPage from '../NextPage/NextPage';

class Layout extends Component {
    _SplashScreenTimeOut;
    state={
        showSplashScreen: true
    }
    componentDidMount(){
        this._SplashScreenTimeOut=  setTimeout(() => {
            
            this.setState({showSplashScreen : false})
        }, 3000);      
    }
    componentWillUnmount(){
        this._SplashScreenTimeOut = undefined;
    }
    render() {
        return (
            <div className="Wrapper">
            {this.state.showSplashScreen ? 
            <SplashScreen />:
            <div className="Layout text-center shadow-sm bg-white">
                <MainRoutes />
            </div>
           }
           <NextPage />
            </div>

        )
    }
}

export default withRouter(Layout);