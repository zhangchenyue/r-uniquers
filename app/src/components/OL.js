import React, {Component} from 'react'
import TopNav from './TopNav'
import Party from './Party'

class OL extends Component {
    constructor() {
        super();
        this.text = 'This is OL page';
    }

    render() {
        return (
            <div>
                <TopNav/>
                <Party/>
            </div>
        )
    }
}

export default OL;