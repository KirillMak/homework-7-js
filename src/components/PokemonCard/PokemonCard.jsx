import React , { Component } from 'react';
import './PokemonCard.css'

export default class PokemonCard extends Component {

    render(){
        const {id, name, source, status} = this.props;
        return(
        <div className = "pokemonCard">
            <div> ID : {id} </div>
            <div> Name : {name} </div>
            <div> 
                <img src = {source} />
             </div>
            <button>Catch</button>
        </div>
        )
    }
}