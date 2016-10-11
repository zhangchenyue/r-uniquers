import React, { Component } from 'react'

class PageFooter extends Component {
    constructor() {
        super();
        this.text = 'Page footer';
    }

    render() {
        return (
            <div className="PageFooter">
            {this.text}
            </div>
        );
    }
}
export default PageFooter;