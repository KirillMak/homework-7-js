import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
  
import Header from './components/Header/';
import PokemonCard from './components/PokemonCard/'
import PokemonPage from './components/PokemonPage';
import Pokemons from './containers/Pokemons';
import {Fragment} from 'react';
import GetPokemon from './containers/GetPokemon';



class App extends Component{
    
    render(){
        return(
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' render={(props)=><Pokemons collection = "pokemons" {...props}/>} />
                    <Route path='/pokemon/:id' component={GetPokemon} />     
                    <Route path='/caughtPokemons' render={(props)=><Pokemons collection = "caught" {...props}/>} />
                </Switch>
            </Fragment>
        );
    }
}

ReactDOM.render((<BrowserRouter><App/></BrowserRouter>), document.getElementById('app'));

