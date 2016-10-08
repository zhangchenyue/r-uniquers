import React, {Component} from 'react'
import TopNav from './TopNav'

class Party extends Component {
    constructor() {
        super();
        this.text = 'This is Party page';
    }

    render() {
        return (
            <div>
                <TopNav/>
                <h1>{this.text}</h1>
            </div>
        )
    }
}

export default Party;