import React ,  { Component } from 'react';
import ButtonCatch from '../../containers/ButtonCatch';
import Pokemon from '../Pokemon';

export default class PokemonPage extends Component{
    render(){
        
        const id = this.props.match !== undefined ? this.props.match.params.id : 0 ;

        fetch(`http://localhost:3000/pokemons/${id}`)
        .then((response) => response.json())
        .then((result) => {
                    console.log(result);
            })
        
        .catch(function(error) {
            console.log(error);
          });

        return(
            <div className = "PokemonPage">
                <Pokemon id = {id} name = "test"/>
                <div>
                    <img src = {`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} />
                </div>
            </div>
        )
    }
        
    
}
