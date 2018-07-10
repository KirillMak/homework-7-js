import React , { Component } from 'react';
import './Button.css';
export default class Header extends Component {
    render(){
        return(
            <button onClick = {this.props.event} disabled = {this.props.isCaught}>{this.props.isCaught ?'Has caught' : 'Catch' }</button>
        )
    }
}