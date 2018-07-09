import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/Button';


export default class ButtonCatch extends Component{

    constructor(props){
        super(props)
        this.state = {
            isCaught: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = function() {
        const { isCaught } = this.state;
        //console.log("Click");
        //console.log(this.state.isCaught);

        fetch('http://localhost:3000/caughtPokemons', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({pokemonId: this.props.pokemonId})
        }).then(res=>res.json())
        .then(res => console.log(res));

        this.setState(prevState => ({
            isCaught: !prevState.isCaught
          }))
    }

    render(){
        return(
            <Button event = {this.handleClick} isCaught = {this.state.isCaught}/>
        )
    }
}