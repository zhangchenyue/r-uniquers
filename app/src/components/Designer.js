import React, { Component } from 'react';
import TopNav from './TopNav'
import PageFooter from './PageFooter'

import '../assets/styles/Designer.css'
import designerBannerImg from '../assets/images/designer-banner.jpg'
import designerProfileImg from '../assets/images/designer-profile.jpg'
import designerWork01Img from '../assets/images/dwork-01.jpg'
import designerWork02Img from '../assets/images/dwork-02.jpg'
import designerWork03Img from '../assets/images/dwork-03.jpg'

class Designer extends Component {
    constructor() {
        super();
        this.text = 'Designer Page!';
    }

    render() {
        return (
            <div className="Designer">
                <TopNav />
                <img className="Designer-banner" src={designerBannerImg} alt="" />
                <div className="Designer-content">
                    <div className="Designer-introduction">
                        <img className="Designer-profile-img" src={designerProfileImg} alt="designer" />
                        <div className="Designer-introduction-info">
                            <div>
                                <div className="glyphicon glyphicon-user" aria-hidden="true"></div>
                                <div>Karl Lagerfeld</div>
                                <small>Name</small>
                            </div>
                            <div>
                                <div className="glyphicon glyphicon-briefcase" aria-hidden="true"></div>
                                <div>Clothing design</div>
                                <small>PROFESSIONAL</small>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <p>卡尔 拉格斐每年为Channel制作8个系列的服装，包括成衣和高级时装，为Fendi制作5个系列他不仅为Channel拍摄宣传照和产品目录，还举办自己的摄影展。 作为一名通晓英语、法语、德语和意大利语的读者，他连出版社也不肯放过。</p>
                        <small>1928年9月生于德国汉堡。卡尔自称1938年出生，但各种证据表明他其实给自己少算了5岁！父亲是卖炼乳的商人，母亲是内衣销售员。14岁时全家移居巴黎，并在此完成了学业。</small>
                    </div>
                </div>
                <div className="Designer-section">
                    <div className="Designer-section-works">
                        <div className="btn-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-default active">
                                <input type="radio" name="options" defaultChecked />
                                <span>设计师主推/RECOMMEND</span>
                            </label>
                            <label className="btn btn-sm btn-default">
                                <input type="radio" name="options" />
                                <span>新款/NEW PRODUCT</span>
                            </label>
                        </div>

                        <div className="Designer-section-works-items">
                            <div className="designer-works-item">
                                <img src={designerWork01Img} alt="" />
                                <p>格纹鹿皮大衣</p>
                                <button type="button" className="btn btn-default btn-sm active">347<small> RMB</small></button>
                            </div>
                            <div className=" designer-works-item">
                                <img src={designerWork02Img} alt="" />
                                <p>格纹鹿皮大衣</p>
                                <button type="button" className="btn btn-default btn-sm active">347<small> RMB</small></button>
                            </div>
                            <div className="designer-works-item">
                                <img src={designerWork03Img} alt="" />
                                <p>格纹鹿皮大衣</p>
                                <button type="button" className="btn btn-default btn-sm active">347<small> RMB</small></button>
                            </div>
                        </div>

                        <div className="Designer-section-works-items">
                            <div className="designer-works-item">
                                <img src={designerWork03Img} alt="" />
                                <p>格纹鹿皮大衣</p>
                                <button type="button" className="btn btn-default btn-sm active">347<small> RMB</small></button>
                            </div>
                            <div className=" designer-works-item">
                                <img src={designerWork01Img} alt="" />
                                <p>格纹鹿皮大衣</p>
                                <button type="button" className="btn btn-default btn-sm active">347<small> RMB</small></button>
                            </div>
                            <div className="designer-works-item">
                                <img src={designerWork02Img} alt="" />
                                <p>格纹鹿皮大衣</p>
                                <button type="button" className="btn btn-default btn-sm active">347<small> RMB</small></button>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter />
            </div>
        );
    }
}

export default Designer;