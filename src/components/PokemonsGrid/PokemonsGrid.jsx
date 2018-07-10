import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './PokemonsGrid.css';
import PokemonCard from '../PokemonCard';
import ButtonCatch from '../../containers/ButtonCatch';

export default class PokemonsGrid extends Component {

    render() {
        const catched = (this.props.catch !== undefined) ? this.props.catch : false;
        return (
            <main>
                <ul className="pokemons-list">
                    {this.props.pokemons.map(function (pokemon, idx) {
                        const { id, name } = pokemon;
                        return (
                            <li key={idx} className="pokemons-list-item">
                                <PokemonCard id={id} name={name} source={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`} />
                                {catched ? '' : <ButtonCatch pokemonId={id} />}
                            </li>
                        );
                    })}
                </ul>
                <button className="loadMore btn btn-primary" onClick={this.props.loadmore}>Load More</button>
            </main >

        )
    }
}


