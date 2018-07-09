import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
  
import Header from './components/Header/';
import PokemonCard from './components/PokemonCard/'
import PokemonsRow from './components/PokemonsRow';
import PokemonPage from './components/PokemonPage';
import Pokemons from './containers/Pokemons';
import {Fragment} from 'react';
//import 'jquery';


class App extends Component{
    
    render(){
        

            /*.then(function(data) {
                    let pokemons = data.results; // Get the results
                    return pokemons.map(function(author) { 

                })*/
       
            
        return(
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' >
                        <Pokemons collection = "pokemons"/>
                    </Route>
                    <Route path='/pokemon/:id' component={PokemonPage} />     
                    <Route exact path='/caughtPokemons' >
                        <Pokemons collection = "caughtPokemons"/>
                    </Route>
                </Switch>
            </Fragment>
        );
    }
}

ReactDOM.render((<BrowserRouter><App/></BrowserRouter>), document.getElementById('app'));

//<Route exact path='/caughtPokemons/' component = {Pokemons} />