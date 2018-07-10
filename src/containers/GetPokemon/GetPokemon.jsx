import React ,  { Component } from 'react';
import ButtonCatch from '../../containers/ButtonCatch';
import PokemonPage from '../../components/PokemonPage';

export default class GetPokemon extends Component{
    constructor(props){
        super(props);
        this.state = {
            pokemon: null
        }
        this.loadPokemon();
    }


    loadPokemon = () => {
        const id = this.props.match !== undefined ? this.props.match.params.id : 0 ;
        const {pokemon} = this.state;
        fetch(`http://localhost:3000/pokemons/${id}?_embed=caught`)
        .then((response) => response.json())
        .then((result) => {
                    //console.log(Array(result));
                    this.setState({
                        pokemon: result //prevState.pokemon.concat(Array(result))
                    })
                   // console.log(this.state.pokemon[0]);
            })
        
        .catch(function(error) {
            console.log(error);
          });
    }

    
    componentDiDMount = () => {
        this.loadPokemon();
          //console.log(`текущее состояние: ${this.state}`);
          //console.log(this.state);
    }
    render(){
        
        const {pokemon} = this.state;
        return(
            pokemon ? <PokemonPage pokemonInfo = {this.state.pokemon}/> : null
        )
    }
        
    
}

//this.state.pokemon.length !== 0 ? this.state.pokemon[0] : {id:1,name:"test"