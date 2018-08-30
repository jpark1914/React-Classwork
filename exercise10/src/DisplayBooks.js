import React, {Component} from 'react'

class DisplayBooks extends Component{
    render()
    {
        var  allBooksArray = this.props.bookArray.map(
            eachItem => {
                return (
                    <div>
                        <h2>This is '{eachItem.bookName}'</h2>
                        <img src={eachItem.urlImage}/>
                        <h2>We gave it a {eachItem.numberOfStars}/ 5</h2>
                        <hr/>
                        <br/>

                    </div>
                )
            }
        )
        return(
            <div>
                {allBooksArray}
            </div>
        );
    }
}

export default DisplayBooks;