import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PokemonsGrid from '../../components/PokemonsGrid';


export default class GetAllPokemons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            page: 1
        }
    }

    loadCaught = () => {
        const { page, pokemons } = this.state;
        fetch(`http://localhost:3000/caught?_expand=pokemon&_page=${this.state.page}&_limit=20`)
            .then((response) => response.json())
            .then((result) => {
                const caughtPokemons = result.map((item) => item.pokemon);
                this.setState({
                    page: page + 1,
                    pokemons: pokemons.concat(caughtPokemons)
                })
            })

            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount = () => {
        this.loadCaught()
    }

    render() {

        return (
            <PokemonsGrid pokemons={this.state.pokemons} loadmore={this.loadCaught} catch={true} />
        );
    }

}
