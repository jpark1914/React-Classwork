import React, {Component} from 'react'
import ScoreButton from "./ScoreButton";

class TwoPlayerScoreKeeper extends Component{
    render() {

        return(
            <div>
                <h1><ScoreButton player={1}/><ScoreButton player={2}/></h1>
            </div>
        );
    }
}

export default TwoPlayerScoreKeeper