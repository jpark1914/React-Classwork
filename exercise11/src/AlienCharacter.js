import React, {Component} from 'react'
import DisplayAliens from "./DisplayAliens";

class AlienCharacter extends Component{
    constructor(props) {
        super(props);
        this.state = {aliens: [{name: 'Vegeta', planet:'Planet Vegeta', size:'crumbs', type: 'Saiyan Planet' }],
        name: '',
        planet: '',
        size: '',
        type: ''}
    }

    nameChange = (event) =>{
        this.setState({name:event.target.value});
    }
    planetChange = (event) =>{
        this.setState({planet:event.target.value});
    }
    sizeChange = (event) =>{
        this.setState({size:event.target.value});
    }
    typeChange = (event) =>{
        this.setState({type:event.target.value});
    }

    submit = (event) =>{

        let newCollection = {name: this.state.name, planet: this.state.planet, size: this.state.size, type: this.state.type}
        this.state.aliens.push(newCollection)
        this.setState({aliens: this.state.aliens,
            name: " ",
            planet: " ",
            size: " ",
            type: " "}
    )
        event.preventDefault();
    }
    render()
    {
        return(
            <div>
               <form onSubmit={this.submit}>
                   <label htmlFor='name'>Name: </label>
                   <input type='text' id='name' value={this.state.name} onChange={this.nameChange}/><br/><br/>

                   <label htmlFor='planet'>Planet: </label>
                   <input type='text' id='planet' value={this.state.planet} onChange={this.planetChange}/><br/><br/>

                   <label htmlFor='size'>Size: </label>
                   <input type='text' id='size' value={this.state.size} onChange={this.sizeChange}/><br/><br/>

                   <label htmlFor='type'>Type: </label>
                   <input type='text' id='type' value={this.state.type} onChange={this.typeChange}/><br/><br/>

                   <input type='submit' value='Submit Info'/>
               </form>
                <DisplayAliens alien={this.state.aliens}/>

            </div>
        );
    }
}

export default AlienCharacter;