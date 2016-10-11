import React, { Component } from 'react';
import TopNav from './TopNav'

class About extends Component {
    constructor() {
        super();
        this.text = 'About page!';
    }

    render() {
        return (
            <div>
                <TopNav/>
                {this.text}
            </div>
        );
    }
}

export default About;