import React , { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Pokemon extends Component {

    render(){
        
        const {id, name, source, status} = this.props;
       
        return(
        <div>
            <div> ID : {id} </div>
            <div> Name : {name} </div>
        </div>
        )
    }
}