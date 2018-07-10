import React , { Component } from 'react';
import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import './Pokemon.css';

export default class Pokemon extends Component {

    render(){
        
        const {id, name, source, status} = this.props;
       
        return(
            <Fragment>
                <div> ID : <span className = "info">{id}</span> </div>
                <div> Name : <span className = "info">{name}</span> </div>
            </Fragment>
        )
    }
}