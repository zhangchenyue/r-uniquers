import React, { Component } from 'react'
import TopNav from './TopNav'
import PageFooter from './PageFooter'

import '../assets/styles/Party.css'
import kindBannerImg from '../assets/images/kind_banner.jpg'
import jacketTitleImg from '../assets/images/jacket-title.png'
import lineImg from '../assets/images/line.png'
import jacket01Img from '../assets/images/jacket-01.jpg'
import jacket02Img from '../assets/images/jacket-02.jpg'
import jacket03Img from '../assets/images/jacket-03.jpg'
import jacket04Img from '../assets/images/jacket-04.jpg'
import jacket05Img from '../assets/images/jacket-05.jpg'
import jacket06Img from '../assets/images/jacket-06.jpg'
import jacketPriceImg from '../assets/images/jacket-price.jpg'

import moreTitleImg from '../assets/images/more-title.png'
import moreLineImg from '../assets/images/more-line.png'
import moreArrowImg from '../assets/images/more-arrow.png'
import jacketMore01Img from '../assets/images/jacket-more-01.jpg'
import jacketMore02Img from '../assets/images/jacket-more-02.jpg'
import jacketMore03Img from '../assets/images/jacket-more-03.jpg'
import jacketMore04Img from '../assets/images/jacket-more-04.jpg'

import trousersTitleImg from '../assets/images/trousers-title.png'
import trousers01Img from '../assets/images/trousers-01.jpg'
import trousers02Img from '../assets/images/trousers-02.jpg'
import trousers03Img from '../assets/images/trousers-03.jpg'
import trousers04Img from '../assets/images/trousers-04.jpg'
import trousers05Img from '../assets/images/trousers-05.jpg'
import trousers06Img from '../assets/images/trousers-06.jpg'
import trousersPriceImg from '../assets/images/jacket-price.jpg'

import trousersMore01Img from '../assets/images/trousers-more-01.jpg'
import trousersMore02Img from '../assets/images/trousers-more-02.jpg'
import trousersMore03Img from '../assets/images/trousers-more-03.jpg'
import trousersMore04Img from '../assets/images/trousers-more-04.jpg'
import trousersMore05Img from '../assets/images/trousers-more-05.jpg'
import trousersMore06Img from '../assets/images/trousers-more-06.jpg'
import trousersMore07Img from '../assets/images/trousers-more-07.jpg'
import trousersMore08Img from '../assets/images/trousers-more-08.jpg'
import trousersMore09Img from '../assets/images/trousers-more-09.jpg'
import trousersMore10Img from '../assets/images/trousers-more-10.jpg'

class Party extends Component {
    constructor() {
        super();
        this.text = 'This is Party page';
    }

    render() {
        return (
            <div className="Party">
                <TopNav />
                <img className="Party-banner" src={kindBannerImg} alt="" />
                <div className="Party-content">
                    <div className="Party-jacket">
                        <div className="Party-jacket-header">
                            <img className="Party-content-title" src={jacketTitleImg} alt="" />
                            <img className="Party-banner" src={lineImg} alt="" />
                        </div>
                        <div className="Party-jacket-content">
                            <div className="Party-jacket-content-section">
                                <a href="#">
                                    <img src={jacket01Img} alt="" />
                                    <img className="Party-content-price" src={jacketPriceImg} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacket02Img} alt="" />
                                    <img className="Party-content-price" src={jacketPriceImg} alt="" />
                                </a>
                            </div>
                            <div className="Party-jacket-content-section">
                                <a href="#">
                                    <img src={jacket03Img} alt="" />
                                    <img className="Party-content-price" src={jacketPriceImg} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacket04Img} alt="" />
                                    <img className="Party-content-price" src={jacketPriceImg} alt="" />
                                </a>
                            </div>
                            <div className="Party-jacket-content-section">
                                <a href="#">
                                    <img src={jacket05Img} alt="" />
                                    <img className="Party-content-price" src={jacketPriceImg} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacket06Img} alt="" />
                                    <img className="Party-content-price" src={jacketPriceImg} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="Party-jacket-more">
                        <div className="Party-jacket-header">
                            <img className="Party-content-title" src={moreTitleImg} alt="" />
                            <img className="Party-banner" src={moreLineImg} alt="" />
                            <img className="Party-content-title" src={moreArrowImg} alt="" />
                        </div>
                        <div className="Party-jacket-content">
                            <div className="Party-jacket-content-section hidden-xs">
                                <a href="#">
                                    <img src={jacketMore01Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacketMore01Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-jacket-content-section">
                                <a href="#">
                                    <img src={jacketMore01Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacketMore01Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-jacket-content-section">
                                <a href="#">
                                    <img src={jacketMore02Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacketMore02Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-jacket-content-section">
                                <a href="#">
                                    <img src={jacketMore03Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacketMore03Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-jacket-content-section hidden-xs">
                                <a href="#">
                                    <img src={jacketMore04Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={jacketMore04Img} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="Party-trousers">
                        <div className="Party-trousers-header">
                            <img className="Party-content-title" src={trousersTitleImg} alt="" />
                            <img className="Party-banner" src={lineImg} alt="" />
                        </div>
                        <div className="Party-trousers-content">
                            <div className="Party-trousers-content-section">
                                <a href="#">
                                    <img src={trousers01Img} alt="" />
                                    <img className="Party-content-price" src={trousersPriceImg} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousers02Img} alt="" />
                                    <img className="Party-content-price" src={trousersPriceImg} alt="" />
                                </a>
                            </div>
                            <div className="Party-trousers-content-section">
                                <a href="#">
                                    <img src={trousers03Img} alt="" />
                                    <img className="Party-content-price" src={trousersPriceImg} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousers04Img} alt="" />
                                    <img className="Party-content-price" src={trousersPriceImg} alt="" />
                                </a>
                            </div>
                            <div className="Party-trousers-content-section">
                                <a href="#">
                                    <img src={trousers05Img} alt="" />
                                    <img className="Party-content-price" src={trousersPriceImg} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousers06Img} alt="" />
                                    <img className="Party-content-price" src={trousersPriceImg} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="Party-trousers-more">
                        <div className="Party-trousers-header">
                            <img className="Party-content-title" src={moreTitleImg} alt="" />
                            <img className="Party-banner" src={moreLineImg} alt="" />
                            <img className="Party-content-title" src={moreArrowImg} alt="" />
                        </div>
                        <div className="Party-trousers-content">
                            <div className="Party-trousers-content-section hidden-xs">
                                <a href="#">
                                    <img src={trousersMore01Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousersMore06Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-trousers-content-section">
                                <a href="#">
                                    <img src={trousersMore02Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousersMore07Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-trousers-content-section">
                                <a href="#">
                                    <img src={trousersMore03Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousersMore08Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-trousers-content-section">
                                <a href="#">
                                    <img src={trousersMore04Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousersMore09Img} alt="" />
                                </a>
                            </div>
                            <div className="Party-trousers-content-section hidden-xs">
                                <a href="#">
                                    <img src={trousersMore05Img} alt="" />
                                </a>
                                <a href="#">
                                    <img src={trousersMore10Img} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter />
            </div>
        )
    }
}

export default Party;