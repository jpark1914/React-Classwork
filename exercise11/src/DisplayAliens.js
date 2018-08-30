import React, {Component} from 'react'

class DisplayAliens extends Component {
    render() {
        var allAliensArray = this.props.alien.map(
            eachItem => {
                return (
                    <div>
                        <p>Name: {eachItem.name}</p>
                        <p>Planet: {eachItem.planet}</p>
                        <p>Size: {eachItem.size}</p>
                        <p>Type: {eachItem.type}</p>
                        <hr/>
                    </div>
                )
            }
        )

        return (
            <div>
                <h1>The Aliens</h1>
                {allAliensArray}
            </div>
        );
    }
}

export default DisplayAliens;