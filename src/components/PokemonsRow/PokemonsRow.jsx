import React , { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import PokemonCard from '../PokemonCard';

export default class PokemonsRow extends Component {
    render(){
        return (
                <Grid>
                    <Row className="show-grid">
                      <Col xs={6} md={3}>
                          <PokemonCard id = "1" name = "Bulbasour" source = "https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/1.png"/>
                      </Col>
                      <Col xs={6} md={3}>
                          <PokemonCard id = "1" name = "Bulbasour" source = "https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/1.png"/>
                      </Col>
                      <Col xsHidden md={3}>
                          <PokemonCard id = "1" name = "Bulbasour" source = "https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/1.png"/>
                      </Col>
                      <Col xsHidden md={3}>
                          <PokemonCard id = "1" name = "Bulbasour" source = "https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/1.png"/>
                      </Col>
                    </Row>
                </Grid>
              
        )
    }
}