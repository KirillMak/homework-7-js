import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/';
import PokemonCard from './components/PokemonCard/'
import PokemonRow from './components/PokemonRow';
//import 'jquery';


class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <PokemonRow />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));