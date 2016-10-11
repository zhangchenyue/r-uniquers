import React, { Component } from 'react';
import ad from '../assets/images/ad1.jpg';
import TopNav from './TopNav';
import PageFooter from './PageFooter'
import '../assets/styles/Home.css';

class Home extends Component {
    constructor() {
        super();
        this.text = 'Home page!'
    }

    render() {
        return (
            <div className="Home">
                <TopNav/>
                <div className="Home-banner carousel slide" data-ride="carousel" data-interval="1500">
                    {/*-- 轮播（Carousel）指标 --*/}
                    <ol className="carousel-indicators">
                        <li data-slide-to="0" className=" active"/>
                        <li data-slide-to="1"/>
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
                <div className="Home-content">
                    {this.text}
                </div>
                <PageFooter/>
            </div>
        );
    }
}

export default Home;