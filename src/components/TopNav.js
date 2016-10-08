import React, { Component } from 'react';
import {Link} from 'react-router';
import '../assets/styles/TopNav.css';
import BrandImg from '../assets/images/logo-title.png';
import ProfileImg from '../assets/images/profile.png';

class TopNav extends Component {
    constructor() {
        super();
        this.text = '';
    }

    render() {
        return (
            <div className="TopNav">
                <Link to="/" onlyActiveOnIndex={true}>
                    <img className="brand" src={BrandImg} alt="UNIQUERS"/>
                </Link>
                <Link to="/home" activeClassName="active">
                    <div className="cn-text">主页</div>
                    <div className="en-text">HOME</div>
                </Link>
                <Link to="/party" activeClassName="active">
                    <div className="cn-text">派对风格</div>
                    <div className="en-text">PARTYSTYLE</div>
                </Link>
                <Link to="/ol" activeClassName="active">
                    <div className="cn-text">OL风格</div>
                    <div className="en-text">OLSTYLE</div>
                </Link>
                <Link to="/vacation" activeClassName="active">
                    <div className="cn-text">度假风格</div>
                    <div className="en-text">VACATIONSTYLE</div>
                </Link>
                <Link to="/about">
                    <img className="img-circle img-profile" alt="My Profile" src={ProfileImg}/>
                </Link>
            </div>
        );
    }
}

export default TopNav;