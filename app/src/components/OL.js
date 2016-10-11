import React, {Component} from 'react'
import TopNav from './TopNav'

class OL extends Component {
    constructor() {
        super();
        this.text = 'This is OL page';
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

export default OL;