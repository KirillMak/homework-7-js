import React ,  { Component } from 'react';
import ButtonCatch from '../../containers/ButtonCatch';
import Pokemon from '../Pokemon';

export default class PokemonPage extends Component{
    render(){
        const {id , name} = this.props;
        //console.log( this.props.pokemonInfo);
        return(
            <div className = "PokemonPage">
                <Pokemon id = {id} name = {name}/>
                <div>
                    <img src = {`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} />
                </div>
            </div>
        )
    }
        
    
}
