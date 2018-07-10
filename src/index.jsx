import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/';
import PokemonCard from './components/PokemonCard/'
import GetAllPokemons from './containers/GetAllPokemons';
import GetCaughtPokemons from './containers/GetCaughtPokemons';
import { Fragment } from 'react';
import GetPokemon from './containers/GetPokemon';



class App extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' render={(props) => <GetAllPokemons collection="pokemons" {...props} />} />
                    <Route exact path='/pokemon/:id' component={GetPokemon} />
                    <Route exact path='/caughtPokemons' render={(props) => <GetCaughtPokemons collection="caught" {...props} />} />
                </Switch>
            </Fragment>
        );
    }
}

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));

