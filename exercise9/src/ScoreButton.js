import React, {Component} from 'react'

class ScoreButton extends Component{
    constructor(props) {
        super(props);
        this.state={
            score: 0,
        }
    }
    addScore = () =>{
        this.setState({score: this.state.score +1})
    }

    render() {;
        return(
            <span>
                <span>Player {this.props.player}: {this.state.score}</span>
                <button type='button' onClick={this.addScore}>Add +1</button>

            </span>
        );
    }
}

export default ScoreButton