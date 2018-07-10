import React ,  { Component } from 'react';
import ButtonCatch from '../../containers/ButtonCatch';
import Pokemon from '../Pokemon';
import './PokemonPage.css';

export default class PokemonPage extends Component{
    render(){
        const {pokemonInfo} = this.props;
        const {id , name,caught} = pokemonInfo;
        const status = caught.length !== 0 ? 'Has caught' : 'Hasn\'t caught';
        const dateCaught = caught.length !== 0 ? caught[0].dateCaught : '-';
        //console.log(pokemonInfo);
       
        return(
            <div className = "PokemonPage">
                <div className = "PokemonPage__item">
                    <Pokemon id = {id} name = {name}/>
                    <div>
                       Status:  <span className = "info">{status}</span>
                    </div>
                    <div>
                        Date of caught:  <span className = "info">{dateCaught}</span>
                    </div>
                    <div>
                        <img src = {`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} />
                    </div>
                </div>
            </div>
        )
    }
        
    
}
