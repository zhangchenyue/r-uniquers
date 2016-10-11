import React, { Component } from 'react';
import ad from '../assets/images/ad1.jpg';
import TopNav from './TopNav'

class Home extends Component {
    constructor() {
        super();
        this.text = 'Home page!'
    }

    render() {
        return (
            <div className="Home">
                <TopNav/>
                <div id="u-carousel" className="carousel slide" data-ride="carousel" data-interval="2000">
                    {/*-- 轮播（Carousel）指标 --*/}
                    <ol className="carousel-indicators">
                        <li data-slide-to="0"/>
                        <li data-slide-to="1" className=" active"/>
                        <li data-slide-to="2" />
                        <li data-slide-to="3"/>
                    </ol>
                    {/*-- 轮播（Carousel）项目 --*/}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img className="carousel-img"  alt="slide" src={ad}/>
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="item">
                            <img className="carousel-img" alt=" slide" src={ad}/>
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="item">
                            <img className="carousel-img" alt=" slide" src={ad}/>
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="item">
                            <img className="carousel-img" alt=" slide" src={ad}/>
                            <div className="carousel-caption"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;