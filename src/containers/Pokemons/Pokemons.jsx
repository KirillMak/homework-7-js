import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import Header from './components/Header/';
//import PokemonCard from './components/PokemonCard/'
//import PokemonRow from './components/PokemonRow';
//import 'jquery';
import PokemonsGrid from '../../components/PokemonsGrid';


export default class Pokemons extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            page :1/*[
             {
               "name": "bulbasaur",
               "id": 1
             },
             {
               "name": "ivysaur",
               "id": 2
             }]*/
        }
    }
    
    componentDidMount = () => {
        const { page, pokemons } = this.state; 
        console.log(this.props);
        fetch(`http://localhost:3000/${this.props.collection}?_page=${this.state.page}&_limit=20`)
            .then((response) => response.json())
            .then((result) => {
                        this.setState({
                        page: page + 1,
                        pokemons: pokemons.concat(result)
                    })
                })
            
            .catch(function(error) {
                console.log(error);
            });
    }

    loadMore = () => {
        const {page, pokemons} = this.state;
        console.log(this.props);
        fetch(`http://localhost:3000/${this.props.collection}?_page=${this.state.page}&_limit=20`)
        .then((response) => response.json())
        .then((result) => {
                    this.setState({
                    pokemons: pokemons.concat(result),
                    page: page +1
                })
            })
        
        .catch(function(error) {
            console.log(error);
          });

    }
    
      
    render(){

        return(
            <PokemonsGrid pokemons = {this.state.pokemons}  loadmore = {this.loadMore}/>
        );
    }
}