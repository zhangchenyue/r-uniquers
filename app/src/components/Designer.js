import React, { Component } from 'react';
import TopNav from './TopNav'
import PageFooter from './PageFooter'

import '../assets/styles/Designer.css'
import designerBannerImg from '../assets/images/designer-banner.jpg'

class Designer extends Component {
    constructor() {
        super();
        this.text = 'Designer Page!';
    }

    render() {
        return (
            <div>
                <TopNav/>
                 <img className="Party-banner" src={designerBannerImg} alt="" />
                <PageFooter/>
            </div>
        );
    }
}

export default Designer;