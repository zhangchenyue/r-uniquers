import React, { Component } from 'react';
import { Link } from 'react-router';
import TopNav from './TopNav'
import PageFooter from './PageFooter'

import '../assets/styles/Detail.css'
import detailCau01Img from '../assets/images/detail-cau1-01.png'
import detailCau02Img from '../assets/images/detail-cau2-01.png'
import chosen from '../assets/images/chosen.png'
import sccImg from "../assets/images/SCC.png"
import fxImg from "../assets/images/FX.png"
import qqImg from "../assets/images/QQ.png"
import wxImg from "../assets/images/WX.png"
import wbImg from "../assets/images/WB.png"

import designerCommentTitleImg from "../assets/images/designer-comment-title.png"
import designerCommentProfile01Img from "../assets/images/designer-comment-profile-01.png"
import designerCommentProfile02Img from "../assets/images/designer-comment-profile-02.png"
import designerCommentProfile03Img from "../assets/images/designer-comment-profile-03.png"

class Detail extends Component {
    constructor() {
        super();
        this.text = 'Detail page!';
    }

    render() {
        return (
            <div className="Detail">
                <TopNav />
                <div className="Detail-site-map">
                    <Link to="/home">首页 > </Link>
                    <Link to="/designer">设计师品牌 > </Link>
                    <Link to="#">香奈儿</Link>
                </div>

                <div className="container-fluid buy-selection">
                    <div className="row row-no-padding">
                        <div className="col-xs-12 col-sm-7 col-md-9">
                            <div id="u-shop-selection-carousel" className="carousel slide" data-ride="carousel" data-interval="2000">
                                <ol className="carousel-indicators">
                                    <li data-slide-to="0" className="active"></li>
                                    <li data-slide-to="1"></li>
                                    <li data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <img className="carousel-img" src={detailCau01Img} alt="First slide" />
                                    </div>
                                    <div className="item">
                                        <img className="carousel-img" src={detailCau01Img} alt="Second slide" />
                                    </div>
                                    <div className="item">
                                        <img className="carousel-img" src={detailCau01Img} alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-3 buy-selection-detail">
                            <div className="row row-no-padding brand-row">
                                <div className="col-xs-3">品牌</div>
                                <div className="col-xs-9">Channel</div>
                            </div>

                            <div className="row row-no-padding buy-price-row">
                                <div className="col-xs-3">单价</div>
                                <div className="col-xs-9 single-price">2988.00</div>
                            </div>

                            <div className="row row-no-padding color-row">
                                <div className="col-xs-3">颜色</div>
                                <div className="col-xs-9">
                                    <img className="color-img" src={detailCau01Img} alt="" />
                                </div>
                            </div>

                            <div className="row row-no-padding size-row">
                                <div className="col-xs-3">尺码</div>
                                <div className="col-xs-9 size-row-options">
                                    <div className="col-xs-5 col-sm-2 col-md-2" >
                                        <span>S码</span>
                                    </div>
                                    <div className="col-xs-5 col-sm-2 col-md-2" >
                                        <span>M码</span>
                                    </div>
                                    <div className="col-xs-5 col-sm-2 col-md-2">
                                        <span>L码</span>
                                    </div>
                                    <div className="col-xs-5 col-sm-2 col-md-2">
                                        <span>XL码</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-no-padding amount-row">
                                <div className="col-xs-3">数量</div>
                                <div className="col-xs-9 amount-row-options">
                                    <span className="col-xs-2 btn btn-default btn-sm">-</span>
                                    <input type="number" className="col-xs-5" aria-label="Amount" />
                                    <span className="col-xs-2 btn btn-default btn-sm">+</span>
                                </div>
                            </div>

                            <div className="row row-no-padding rent-row">
                                <div className="col-xs-3">租赁</div>
                                <div className="col-xs-9 rent-row-options">
                                    <div className="col-xs-9 col-sm-5 col-md-5" >
                                        <span>600*1个月</span>
                                        <img className="size-chosen-img" src={chosen} alt="" />
                                    </div>
                                    <div className="col-xs-9 col-sm-5 col-md-5" >
                                        <span>400*2个月</span>
                                        <img className="size-chosen-img" src={chosen} alt="" />
                                    </div>
                                    <div className="col-xs-9 col-sm-5 col-md-5">
                                        <span>800*3个月</span>
                                        <img className="size-chosen-img" src={chosen} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="row row-no-padding shop-btn-row">
                                <div className="shop-btn-row-line"></div>
                                <div className="col-xs-5">
                                    <button type="button" className="btn btn-warning btn-block">立即购买</button>
                                </div>
                                <div className="col-xs-offset-2 col-xs-5">
                                    <button type="button" className="btn btn-success btn-block">添加到购物车</button>
                                </div>
                            </div>

                            <div className="row row-no-padding function-btn-row">
                                <a href="#"><img src={sccImg} alt="" /></a>
                                <a href="#"><img src={fxImg} alt="" /></a>
                                <a href="#"><img src={qqImg} alt="" /></a>
                                <a href="#"><img src={wxImg} alt="" /></a>
                                <a href="#"><img src={wbImg} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid designer-comment">
                    <div className="row row-no-padding">
                        <div className="col-xs-12 col-sm-7 col-md-9">
                            <div id="u-designer-comment-carousel" className="carousel slide" data-ride="carousel" data-interval="2000">
                                <ol className="carousel-indicators">
                                    <li data-slide-to="0" className="active"></li>
                                    <li data-slide-to="1"></li>
                                    <li data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <img className="carousel-img" src={detailCau02Img} alt="First slide" />
                                    </div>
                                    <div className="item">
                                        <img className="carousel-img" src={detailCau02Img} alt="Second slide" />
                                    </div>
                                    <div className="item">
                                        <img className="carousel-img" src={detailCau02Img} alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-3">
                            <div className="designer-comment-title"><img src={designerCommentTitleImg} alt="" /></div>
                            <div className="list-group">
                                <a href="#" className="row row-no-padding list-group-item">
                                    <img className="col-xs-2" src={designerCommentProfile01Img} alt="" />
                                    <span className="col-xs-offset-1 col-xs-9">真好看，特别合身，同事说这裙子特显瘦这是我在ZK上买的最满意的衣服了。料子很舒服</span>
                                </a>
                                <a href="#" className="row row-no-padding list-group-item">
                                    <img className="col-xs-2" src={designerCommentProfile02Img} alt="" />
                                    <span className="col-xs-offset-1 col-xs-9">面料柔软，舒适度很好，一点都不透，而且特别显身材，客服推荐的M号很合适</span>
                                </a>
                                <a href="#" className="row row-no-padding list-group-item">
                                    <img className="col-xs-2" src={designerCommentProfile03Img} alt="" />
                                    <span className="col-xs-offset-1 col-xs-9">裙子型很好，是我新换的类型，有一点小问题，不过客服已经快速圆满地解决了，老客户一定支持的</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter />
            </div>
        );
    }
}

export default Detail;