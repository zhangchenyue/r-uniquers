import React, { Component } from 'react'
import "../assets/styles/PageFooter.css"
import codeImg from "../assets/images/code.png"

class PageFooter extends Component {
    constructor() {
        super();
        this.text = 'Uniquers';
    }

    render() {
        return (
            <div className="PageFooter">
                <div>
                    <p>{this.text}</p>
                    <img className="PageFooter-brandcode" src={codeImg} alt="brand" />
                </div>

                <div>
                    <p>服务中心</p>
                    <p className="PageFooter-subtext">服务热线</p>
                </div>

                <div>
                    <p>帮助中心</p>
                    <p className="PageFooter-subtext">购物流程</p>
                    <p className="PageFooter-subtext">会员说明</p>
                    <p className="PageFooter-subtext">品牌入住</p>
                </div>

                <div>
                    <p>关于我们</p>
                    <p className="PageFooter-subtext">介绍</p>
                    <p className="PageFooter-subtext">联系我们</p>
                    <p className="PageFooter-subtext">招贤纳士</p>
                </div>
            </div>
        );
    }
}
export default PageFooter;