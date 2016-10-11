import React, { Component } from 'react';
import {Link} from 'react-router';

import '../assets/styles/Welcome.css';
import Facebase from '../assets/images/face03.jpg';
import FaceWoman from '../assets/images/face01.jpg';
import FaceMan from '../assets/images/face02.jpg';
import PhoneFacebase from '../assets/images/face-phone-03.png';
import PhoneFaceMan from '../assets/images/face-phone-02.png';
import PhoneFaceWoman from '../assets/images/face-phone-01.png';
import PhoneFaceEmptyText from '../assets/images/face-phone-empty.png';
import PhoneFaceManText from '../assets/images/face-phone-man.png';
import PhoneFaceWomanText from '../assets/images/face-phone-woman.png';
import $ from 'jquery';

class Welcome extends Component {
    constructor() {
        super();
        $('.face-phone-text-empty').show();
        $('.face-phone-text-woman').hide();
        $('.face-phone-text-man').hide();
    }

    handleFacePhoneManClick(e){
        $('.face-phone-text-empty').hide();
        $('.face-phone-text-woman').hide();
        $('.face-phone-text-man').fadeIn();
    }

    handleFacePhoneWomanClick(){
        $('.face-phone-text-empty').hide();
        $('.face-phone-text-man').hide();
        $('.face-phone-text-woman').fadeIn();
    }

    render() {
        return (
            <div className="Welcome">
                <div className="images">
                    <div className="face-base">
                        <img className="face-pc" src={Facebase} alt=""/>
                        <img className="face-phone" src={PhoneFacebase} alt=""/>
                    </div>
                    <div className="face-left">
                        <Link to="/home"  className="face-pc" activeClassName="active"><img src={FaceMan} alt=""/></Link>
                        <img className="face-phone" onClick={this.handleFacePhoneManClick.bind(this)} src={PhoneFaceMan} alt=""/>
                    </div>
                     <div className="face-right">
                        <Link to="/home"  className="face-pc" activeClassName="active"><img src={FaceWoman} alt=""/></Link>
                        <img className="face-phone"  onClick={this.handleFacePhoneWomanClick.bind(this)} src={PhoneFaceWoman} alt=""/>
                    </div>
                    <div className="face-phone face-phone-text">
                        <img className="face-phone-text-empty" src={PhoneFaceEmptyText} alt=""/>
                        <Link to="/home" activeClassName="active" className="face-phone-text-man">
                            <img src={PhoneFaceManText} alt=""/>
                        </Link>
                          <Link to="/home" activeClassName="active" className="face-phone-text-woman">
                            <img src={PhoneFaceWomanText} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;