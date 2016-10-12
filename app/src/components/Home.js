import React, { Component } from 'react';
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
                        <div className="Home-content-header">
                            <img className="Home-content-header-text" src={u1TitleImg} alt="U1" />
                            <img className="Home-content-header-splitter" src={uSplitterImg} alt="" />
                            <div className="Home-content-section">
                                <div className="Home-content-section-col">
                                    <a href="#"><img src={u1_01Img}  alt=""/></a>
                                    <a href="#"><img src={u1_02Img}  alt=""/></a>
                                </div>
                                <div className="Home-content-section-col">
                                    <a href="#"><img src={u1_03Img}  alt=""/></a>
                                    <a href="#"><img src={u1_04Img}  alt=""/></a>
                                </div>
                                <div className="Home-content-section-col hidden-xs">
                                    <a href="#"><img src={u1_05Img}  alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Home-content-f1">
                    </div>

                    <div className="Home-content-u2">
                    </div>

                    <div className="Home-content-f2">
                    </div>

                    <div className="Home-content-u3">
                    </div>

                    <div className="Home-content-f3">
                    </div>

                    <div className="Home-content-u4">
                    </div>
                </div>
                <PageFooter />
            </div>
        );
    }
}

export default Home;