import React, {Component} from 'react'
import DisplayBooks from "./DisplayBooks";

class Kindle extends Component{
    constructor(props) {
        super(props);
        this.state= {
            books:[{bookName: "The Volatile ", numberOfStars: "3 ", urlImage: "https://placeimg.com/200/250/arch/sepia "},
                {bookName: "Goose Chase ", numberOfStars: "5 ", urlImage:"https://placeimg.com/200/250/animals/sepia" }],
            bookName: " ",
            numberOfStars:  " ",
            urlImage: " ",
        }
    }


    render()
    {
        return(
            <div>
                <h1>Books: </h1>
                <DisplayBooks bookArray={this.state.books}/>
            </div>
        );
    }
}

export default Kindle;