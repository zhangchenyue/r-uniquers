import React, { Component } from 'react'
import TopNav from './TopNav'
import Party from './Party'

class Vacation extends Component {
    constructor() {
        super();
        this.text = 'This is Vacation page'
    }

    render() {
        return (
            <div>
                <TopNav />
                <Party />
            </div>
        )
    }
}

export default Vacation;