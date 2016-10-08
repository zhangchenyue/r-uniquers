import React, {Component} from 'react'
import TopNav from './TopNav'

class Vacation extends Component {
    constructor() {
        super();
        this.text = 'This is Vacation page'
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

export default Vacation;