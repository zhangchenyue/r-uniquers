import React, { Component } from 'react';
import { Link } from 'react-router';
import adImg from '../assets/images/ad1.jpg';
import TopNav from './TopNav';
import PageFooter from './PageFooter'
import '../assets/styles/Home.css';

import u1TitleImg from '../assets/images/u1-title.png';
import uSplitterImg from '../assets/images/u1-splitter.png';
import u1_01Img from '../assets/images/u1-01.jpg';
import u1_02Img from '../assets/images/u1-02.jpg';
import u1_03Img from '../assets/images/u1-03.jpg';
import u1_04Img from '../assets/images/u1-04.jpg';
import u1_05Img from '../assets/images/u1-05.jpg';

import f1TitleImg from '../assets/images/f1-title.png';
import fSplitterImg from '../assets/images/f1-splitter.png';
import f1_profileImg from '../assets/images/f1-profile.jpg';
import f1_01Img from '../assets/images/f1-01.jpg';
import f1_02Img from '../assets/images/f1-02.jpg';
import f1_03Img from '../assets/images/f1-03.jpg';
import f1_04Img from '../assets/images/f1-04.jpg';

import u2TitleImg from '../assets/images/u2-title.png';
import u2_01Img from '../assets/images/u2-01.jpg';
import u2_02Img from '../assets/images/u2-02.jpg';
import u2_03Img from '../assets/images/u2-03.jpg';
import u2_04Img from '../assets/images/u2-04.jpg';
import u2_05Img from '../assets/images/u2-05.jpg';

import f2TitleImg from '../assets/images/f2-title.png';
import f2_profileImg from '../assets/images/f2-profile.jpg';
import f2_01Img from '../assets/images/f2-01.jpg';
import f2_02Img from '../assets/images/f2-02.jpg';
import f2_03Img from '../assets/images/f2-03.jpg';
import f2_04Img from '../assets/images/f2-04.jpg';

import u3TitleImg from '../assets/images/u3-title.png';
import u3_01Img from '../assets/images/u3-01.jpg';
import u3_02Img from '../assets/images/u3-02.jpg';
import u3_03Img from '../assets/images/u3-03.jpg';
import u3_04Img from '../assets/images/u3-04.jpg';
import u3_05Img from '../assets/images/u3-05.jpg';
import u3_06Img from '../assets/images/u3-06.jpg';
import u3_07Img from '../assets/images/u3-07.jpg';


import f3TitleImg from '../assets/images/f3-title.png';
import f3_profileImg from '../assets/images/f3-profile.jpg';
import f3_01Img from '../assets/images/f3-01.jpg';
import f3_02Img from '../assets/images/f3-02.jpg';
import f3_03Img from '../assets/images/f3-03.jpg';
import f3_04Img from '../assets/images/f3-04.jpg';
import f3_05Img from '../assets/images/f3-05.jpg';
import f3_06Img from '../assets/images/f3-06.jpg';
import f3_07Img from '../assets/images/f3-07.jpg';
import f3_08Img from '../assets/images/f3-08.jpg';


import u4TitleImg from '../assets/images/u4-title.png';
import u4_profileImg from '../assets/images/u4-profile.jpg';
import u4_profileInfoImg from '../assets/images/u4-profile-info.jpg';
import u4_01Img from '../assets/images/u4-01.jpg';
import u4_02Img from '../assets/images/u4-02.jpg';
import u4_03Img from '../assets/images/u4-03.jpg';
import u4_04Img from '../assets/images/u4-04.jpg';
import u4_05Img from '../assets/images/u4-05.jpg';

class Home extends Component {
    constructor() {
        super();
        this.text = 'Home page!'
    }

    render() {
        return (
            <div className="Home">
                <TopNav />
                <div className="Home-banner carousel slide" data-ride="carousel" data-interval="1500">
                    {/*-- 轮播（Carousel）指标 --*/}
                    <ol className="carousel-indicators">
                        <li data-slide-to="0" className=" active" />
                        <li data-slide-to="1" />
                        <li data-slide-to="2" />
                        <li data-slide-to="3" />
                    </ol>
                    {/*-- 轮播（Carousel）项目 --*/}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img className="carousel-img" alt="slide" src={adImg} />
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="item">
                            <img className="carousel-img" alt=" slide" src={adImg} />
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="item">
                            <img className="carousel-img" alt=" slide" src={adImg} />
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="item">
                            <img className="carousel-img" alt=" slide" src={adImg} />
                            <div className="carousel-caption"></div>
                        </div>
                    </div>
                </div>
                <div className="Home-content">
                    <div className="Home-content-u1">
                        <div className="Home-content-header Home-content-center">
                            <img className="Home-content-header-text" src={u1TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={uSplitterImg} alt="" />
                        </div>
                        <div className="Home-content-section">
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u1_01Img} alt="" /></a>
                                <a href="#"><img src={u1_02Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u1_03Img} alt="" /></a>
                                <a href="#"><img src={u1_04Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={u1_05Img} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Home-content-f1">
                        <div className="Home-content-header">
                            <img className="Home-content-header-text" src={f1TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={fSplitterImg} alt="" />
                        </div>
                        <div className="Home-content-section">
                            <div className="Home-content-section-col">
                                <Link to="/designer">
                                    <img src={f1_profileImg} alt="" />
                                </Link>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={f1_01Img} alt="" /></a>
                                <a href="#"><img src={f1_01Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={f1_02Img} alt="" /></a>
                                <a href="#"><img src={f1_02Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={f1_03Img} alt="" /></a>
                                <a href="#"><img src={f1_03Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={f1_04Img} alt="" /></a>
                                <a href="#"><img src={f1_04Img} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Home-content-u2">
                        <div className="Home-content-header Home-content-center">
                            <img className="Home-content-header-text" src={u2TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={uSplitterImg} alt="" />
                        </div>
                        <div className="Home-content-section">
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u2_01Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u2_02Img} alt="" /></a>
                                <a href="#"><img src={u2_03Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={u2_04Img} alt="" /></a>
                                <a href="#"><img src={u2_05Img} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Home-content-f2">
                        <div className="Home-content-header">
                            <img className="Home-content-header-text" src={f2TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={fSplitterImg} alt="" />
                        </div>
                        <div className="Home-content-section">
                            <div className="Home-content-section-col">
                                <Link to="/designer">
                                    <img src={f2_profileImg} alt="" />
                                </Link>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={f2_01Img} alt="" /></a>
                                <a href="#"><img src={f2_01Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={f2_02Img} alt="" /></a>
                                <a href="#"><img src={f2_02Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={f2_03Img} alt="" /></a>
                                <a href="#"><img src={f2_03Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={f2_04Img} alt="" /></a>
                                <a href="#"><img src={f2_04Img} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Home-content-u3">
                        <div className="Home-content-header Home-content-center">
                            <img className="Home-content-header-text" src={u3TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={uSplitterImg} alt="" />
                        </div>
                        <div className="Home-content-section">
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u3_01Img} alt="" /></a>
                                <a href="#"><img src={u3_02Img} alt="" /></a>
                                <a href="#"><img src={u3_03Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u3_04Img} alt="" /></a>
                                <a href="#"><img src={u3_05Img} alt="" /></a>
                                <a href="#"><img src={u3_06Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={u3_07Img} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Home-content-f3">
                        <div className="Home-content-header">
                            <img className="Home-content-header-text" src={f3TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={fSplitterImg} alt="" />
                        </div>
                        <div className="Home-content-section">
                            <div className="Home-content-section-col">
                                <Link to="/designer">
                                    <img src={f3_profileImg} alt="" />
                                </Link>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={f3_01Img} alt="" /></a>
                                <a href="#"><img src={f3_05Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={f3_02Img} alt="" /></a>
                                <a href="#"><img src={f3_06Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={f3_03Img} alt="" /></a>
                                <a href="#"><img src={f3_07Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col hidden-xs">
                                <a href="#"><img src={f3_04Img} alt="" /></a>
                                <a href="#"><img src={f3_08Img} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Home-content-u4">
                        <div className="Home-content-header Home-content-center">
                            <img className="Home-content-header-text" src={u4TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={uSplitterImg} alt="" />
                        </div>
                        <div className="Home-content-section">
                            <div className="Home-content-section-col">
                                <Link to="/designer">
                                    <img src={u4_profileImg} alt="" />
                                    <img src={u4_profileInfoImg} alt="" />
                                </Link>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u4_01Img} alt="" /></a>
                                <a href="#"><img src={u4_02Img} alt="" /></a>
                            </div>
                            <div className="Home-content-section-col">
                                <a href="#"><img src={u4_03Img} alt="" /></a>
                                <a href="#"><img src={u4_04Img} alt="" /></a>
                                <a href="#"><img src={u4_05Img} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter />
            </div>
        );
    }
}

export default Home;