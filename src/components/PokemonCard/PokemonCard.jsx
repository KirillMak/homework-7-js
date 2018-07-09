import React , { Component } from 'react';
import './PokemonCard.css';
import ButtonCatch from '../../containers/ButtonCatch';
import Pokemon from '../Pokemon';
import {Link} from 'react-router-dom';

export default class PokemonCard extends Component {

    render(){
        
        
        const {id, name, source, status} = this.props;
       
        return(
        <div className = "pokemonCard">
            <Pokemon id = {id} name = {name}/>
            <div> 
                <Link to = {`/pokemon/${id}`}> <img src = {source} /></Link>
             </div>
            <ButtonCatch pokemonId = {id} />
        </div>
        )
    }
}