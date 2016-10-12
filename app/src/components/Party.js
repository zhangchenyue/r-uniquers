import React, {Component} from 'react'
import TopNav from './TopNav'

import '../assets/styles/Party.css'
import kindBannerImg from '../assets/images/kind_banner.jpg'
import jacketTitleImg from '../assets/images/jacket-title.png'
import lineImg from '../assets/images/line.png'

class Party extends Component {
    constructor() {
        super();
        this.text = 'This is Party page';
    }

    render() {
        return (
            <div className="Party">
                <TopNav/>
                <img className="Party-banner" src={kindBannerImg} alt=""/>
                <div className="Party-content">
                    <div className="Party-jacket">
                        <div className="Party-jacket-header">
                            <img className="Party-content-title" src={jacketTitleImg} alt=""/>
                            <img className="Party-banner" src={lineImg} alt=""/>
                        </div>
                    </div>

                    <div className="Party-jacket-more">
                    </div>

                    
                    <div className="Party-trousers">
                    </div>
                    
                    <div className="Party-trousers-more">
                    </div>
                </div>
            </div>
        )
    }
}

export default Party;