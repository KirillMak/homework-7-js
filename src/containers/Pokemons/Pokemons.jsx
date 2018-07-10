import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PokemonsGrid from '../../components/PokemonsGrid';


export default class Pokemons extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            page :1
        }
    }
 
    loadAllPokemons = () => {
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

    loadCaught = () => {
        const { page, pokemons } = this.state; 
        console.log(this.props);
        fetch(`http://localhost:3000/caught?_expand=pokemon&_page=${this.state.page}&_limit=20`)
            .then((response) => response.json())
            .then((result) => {

                        let caughtPokemons = result.map((item)=>item.pokemon);
                        this.setState({
                        page: page + 1,
                        pokemons: pokemons.concat(caughtPokemons)
                    })
                })
            
            .catch(function(error) {
                console.log(error);
            });
    }

    componentDidMount = () => {
        switch(this.props.collection){
            case "pokemons":
                this.loadAllPokemons()
                break;
            case "caught":
                this.loadCaught()
                break;
            default:
                this.loadAllPokemons()
        }
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